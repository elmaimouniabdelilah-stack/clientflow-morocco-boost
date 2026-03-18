import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download, Copy, Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QRGeneratorProps {
  baseUrl?: string;
}

const QRGenerator = ({ baseUrl }: QRGeneratorProps) => {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const url = baseUrl || `${window.location.origin}/client-flow`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "client-flow-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="space-y-4">
      <div ref={canvasRef} className="flex justify-center p-6 bg-white rounded-xl border border-border">
        <QRCodeCanvas value={url} size={180} level="H" includeMargin />
      </div>

      <div className="flex gap-2">
        <Input value={url} readOnly dir="ltr" className="text-xs" />
        <Button variant="outline" size="icon" onClick={handleCopy} className="flex-shrink-0">
          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <Button onClick={handleDownload} variant="outline" className="w-full">
        <Download className="ml-2 h-4 w-4" />
        تحميل QR Code
      </Button>
    </div>
  );
};

export default QRGenerator;
