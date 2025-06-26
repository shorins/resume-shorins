interface Window {
  ymaps: {
    ready: (callback: () => void) => void;
    Map: new (element: HTMLElement, options: object) => any;
    Placemark: new (coordinates: [number, number], properties: object, options: object) => any;
  };
}