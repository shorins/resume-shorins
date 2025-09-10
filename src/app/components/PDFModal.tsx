import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pdfUrl: string;
  title: string;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, setIsOpen, pdfUrl, title }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);

  function closeModal() {
    setIsOpen(false);
    // Reset zoom and rotation when closing
    setZoomLevel(100);
    setRotation(0);
  }

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 200));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50));
  };

  const resetZoom = () => {
    setZoomLevel(100);
    setRotation(0);
  };

  const rotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all max-h-[90vh] flex flex-col">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center flex-shrink-0"
                >
                  {title}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Title>
                
                {/* Controls */}
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-medium text-gray-700 min-w-[40px] text-center">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button
                    onClick={rotate}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors ml-2"
                    aria-label="Rotate"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="ml-2 px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
                
                <div className="mt-4 flex-grow overflow-auto">
                  <div 
                    className="h-full w-full flex items-center justify-center"
                    style={{ 
                      transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <iframe 
                      src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} 
                      className="w-full h-full min-h-[50vh] sm:min-h-[70vh] border border-gray-300 rounded-lg"
                      title={title}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PDFModal;