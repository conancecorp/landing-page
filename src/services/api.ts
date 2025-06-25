interface ContactData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Use the same origin to avoid CORS issues during development
const API_BASE_URL = window.location.origin.includes('5174') 
  ? 'http://localhost:8000/api/v1'  // When landing page runs on 5174
  : 'http://localhost:8000/api/v1'; // Default

// Helper function to extract user-friendly error messages from FastAPI validation errors
function extractErrorMessage(errorData: any): string {
  // If it's a simple string message
  if (typeof errorData.detail === 'string') {
    return errorData.detail;
  }
  
  // If it's FastAPI validation errors (array of error objects)
  if (Array.isArray(errorData.detail)) {
    const errors = errorData.detail.map((error: any) => {
      // Extract field name from location array
      const fieldPath = error.loc ? error.loc.slice(1).join('.') : 'champ';
      const fieldName = getFieldDisplayName(fieldPath);
      
      // Extract user-friendly message
      let message = error.msg || 'Erreur de validation';
      
      // Clean up technical Pydantic messages
      if (message.startsWith('Value error, ')) {
        message = message.replace('Value error, ', '');
      }
      
      return `${fieldName}: ${message}`;
    });
    
    return errors.join('\n');
  }
  
  // Fallback for other error formats
  return errorData.message || errorData.detail || 'Erreur lors de l\'envoi du message';
}

// Helper function to convert API field names to user-friendly names
function getFieldDisplayName(fieldName: string): string {
  const fieldMap: { [key: string]: string } = {
    'name': 'Nom',
    'email': 'Email', 
    'message': 'Message',
    'company': 'Entreprise',
    'phone': 'Téléphone'
  };
  
  return fieldMap[fieldName] || fieldName;
}

export const contactService = {
  async sendContact(data: ContactData): Promise<ContactResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const userFriendlyMessage = extractErrorMessage(errorData);
        throw new Error(userFriendlyMessage);
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du contact:', error);
      throw error;
    }
  }
}; 