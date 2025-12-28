import React, { useState, useEffect } from 'react';
import { Service } from '../../../types/services';
import { ServiceEditor } from './ServiceEditor';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { services as defaultServices } from '../../../data/services';

export function ServiceManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      // Services are static data - load from data file
      setServices(defaultServices);
    } catch (err) {
      setError('Failed to load services');
      console.error('Error loading services:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleSave = async (service: Service) => {
    try {
      // Services are static - just reload
      await loadServices();
      setEditingService(null);
      setIsCreating(false);
      alert('Service management is read-only. Update services in src/data/services.ts');
    } catch (err) {
      setError('Failed to save service');
      console.error('Error saving service:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    
    try {
      // Services are static - just reload
      await loadServices();
      alert('Service management is read-only. Update services in src/data/services.ts');
    } catch (err) {
      setError('Failed to delete service');
      console.error('Error deleting service:', err);
    }
  };

  const handleAddNew = () => {
    setEditingService(null);
    setIsCreating(true);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  if (isCreating) {
    return <ServiceEditor onSave={handleSave} />;
  }

  if (editingService) {
    return <ServiceEditor service={editingService} onSave={handleSave} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Services</h2>
        <button
          onClick={handleAddNew}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add New Service
        </button>
      </div>

      <div className="grid gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-purple-600">KSH {service.price}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingService(service)}
                  className="text-purple-600 hover:text-purple-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}