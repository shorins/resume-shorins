import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Download } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pdfUrl: string;
  title: string;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, setIsOpen, pdfUrl, title }) => {
  function closeModal() {
    setIsOpen(false);
  }

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-3 sm:p-6 text-left align-middle shadow-xl transition-all max-h-[95vh] sm:max-h-[90vh] flex flex-col"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center flex-shrink-0"
                >
                  {title}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={downloadPDF}
                      className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      <span>Скачать</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </Dialog.Title>
                
                {/* PDF Container */}
                <div className="mt-4 flex-grow overflow-auto">
                  <iframe 
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} 
                    className="w-full h-full min-h-[40vh] sm:min-h-[60vh] md:min-h-[70vh] border border-gray-300 rounded-lg"
                    title={title}
                  />
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