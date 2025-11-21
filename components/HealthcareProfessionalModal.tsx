"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface HealthcareProfessionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function HealthcareProfessionalModal({
  open,
  onOpenChange,
}: HealthcareProfessionalModalProps) {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      setIsChecked(false);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecked) {
      onOpenChange(false);
      router.push("/products");
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white max-w-md w-full p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Healthcare Professional Verification
        </h2>
        <p className="text-gray-700 mb-6">
          This section is intended for healthcare professionals only. Please
          confirm that you are a licensed healthcare professional to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 text-primary bg-white border-gray-300 rounded cursor-pointer"
              />
              <span className="text-gray-700 text-sm">
                I confirm that I am a licensed healthcare professional
              </span>
            </label>
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              variant="primary"
              disabled={!isChecked}
              className="flex-1"
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
