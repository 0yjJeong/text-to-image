import { RefObject, ReactInstance } from 'react';
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
  ExportComponentReturn,
} from 'react-component-export-image';

type ExportFormat = 'jpeg' | 'pdf' | 'png';

export type ExportFormatArr = Array<ExportFormat>;

type ExportFactories = {
  [key in ExportFormat]: (instance: RefObject<ReactInstance>) => void;
};

export const exportFactories: ExportFactories = {
  jpeg: (instance) => exportComponentAsJPEG(instance),
  pdf: (instance) => exportComponentAsPDF(instance),
  png: (instance) => exportComponentAsPNG(instance),
};

export default function useExport(instance: RefObject<HTMLDivElement> | null) {
  const exportFile = (format: ExportFormat) => {
    if (!instance) {
      throw new Error('No instace available for export');
    }

    const exportImpl = exportFactories[format];
    if (!exportImpl) {
      throw new Error('Not a quailified format');
    }

    return exportImpl(instance);
  };

  return { exportFile };
}
