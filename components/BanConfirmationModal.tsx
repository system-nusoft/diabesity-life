"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Ban, UserCheck, X } from "lucide-react";
import { Button } from "./ui/button";

interface BanConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
  isBanned: boolean;
}

export default function BanConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  userName,
  isBanned,
}: BanConfirmationModalProps) {
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
        <div
          className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
            isBanned ? "bg-green-100" : "bg-orange-100"
          }`}
        >
          {isBanned ? (
            <UserCheck className="w-8 h-8 text-green-600" />
          ) : (
            <Ban className="w-8 h-8 text-orange-500" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
          {isBanned ? t("community.banModal.unbanTitle") : t("community.banModal.banTitle")}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6">
          {isBanned ? (
            <>
              {t("community.banModal.unbanDesc1")} <strong>{userName}</strong>{t("community.banModal.unbanDesc2")}
            </>
          ) : (
            <>
              {t("community.banModal.banDesc1")} <strong>{userName}</strong>{t("community.banModal.banDesc2")}
            </>
          )}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            {t("community.banModal.cancel")}
          </Button>
          <Button
            variant="primary"
            className={`flex-1`}
            onClick={handleConfirm}
          >
            {isBanned ? t("community.banModal.unbanButton") : t("community.banModal.banButton")}
          </Button>
        </div>
      </div>
    </div>
  );
}
