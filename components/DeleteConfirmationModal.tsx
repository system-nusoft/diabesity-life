"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Trash2, X } from "lucide-react";
import { Button } from "./ui/button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: "post" | "comment";
  title?: string;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  type,
  title,
}: DeleteConfirmationModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md mx-4 p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-red-100">
          <Trash2 className="w-8 h-8 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
          {type === "post" ? t("community.deleteModal.deletePostTitle") : t("community.deleteModal.deleteCommentTitle")}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6">
          {type === "post" ? (
            <>
              {t("community.deleteModal.deletePostDesc")}
              {title && (
                <>
                  : <strong className="break-words">&quot;{title}&quot;</strong>
                </>
              )}
              {t("community.deleteModal.deletePostDescSuffix")}
            </>
          ) : (
            <>
              {t("community.deleteModal.deleteCommentDesc")}
            </>
          )}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            {t("community.deleteModal.cancel")}
          </Button>
          <Button
            variant="secondary"
            className="flex-1 !bg-red-500 !border-red-500 hover:!bg-red-600"
            onClick={handleConfirm}
          >
            {t("community.deleteModal.delete")}
          </Button>
        </div>
      </div>
    </div>
  );
}
