interface ErrorMessageProps {
    error: string | null;
  }
  
  export const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <p className="text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  };