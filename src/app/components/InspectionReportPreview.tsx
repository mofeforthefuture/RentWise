import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

/**
 * Mock inspection report preview for trust-building.
 * Shows what a Rentwise report looks like (sample structure).
 */
export function InspectionReportPreview() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Report header */}
      <div className="bg-[var(--rentwise-primary)] text-white px-5 py-4 flex items-center gap-3">
        <FileText className="w-6 h-6 shrink-0" />
        <div>
          <p className="font-semibold">Sample Inspection Report</p>
          <p className="text-white/80 text-sm">Rentwise · Lagos</p>
        </div>
      </div>

      {/* Property image placeholder */}
      <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        <span>Property photos</span>
      </div>

      {/* Findings summary */}
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Overall risk</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            Moderate
          </span>
        </div>

        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)] shrink-0 mt-0.5" />
            <span>Plumbing & water pressure — OK</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>Drainage — minor concerns noted</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)] shrink-0 mt-0.5" />
            <span>Electrical — satisfactory</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>Flood risk — area history included in full report</span>
          </li>
        </ul>

        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Recommendation</p>
          <p className="text-gray-800 text-sm">
            Proceed with caution. Request landlord to address drainage before signing. Full report includes photos and detailed notes.
          </p>
        </div>
      </div>

      <div className="px-5 pb-5">
        <p className="text-xs text-gray-400 text-center">
          This is a sample. Your report will include actual property photos and inspector notes.
        </p>
      </div>
    </motion.div>
  );
}
