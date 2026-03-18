import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";

type Step = "rating" | "feedback" | "redirect" | "thanks";

const ReviewFunnel = () => {
  const [searchParams] = useSearchParams();
  const businessName = searchParams.get("biz") || "مشروعنا";
  const googleUrl = searchParams.get("google") || "https://g.page/review";

  const [step, setStep] = useState<Step>("rating");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackPhone, setFeedbackPhone] = useState("");

  const handleRate = (value: number) => {
    setRating(value);
    setTimeout(() => {
      if (value >= 4) {
        setStep("redirect");
      } else {
        setStep("feedback");
      }
    }, 400);
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to database when Cloud is enabled
    console.log("Feedback submitted:", { rating, feedbackText, feedbackName, feedbackPhone, businessName });
    setStep("thanks");
  };

  const handleGoToGoogle = () => {
    window.open(googleUrl, "_blank");
    setStep("thanks");
  };

  const ratingLabels = ["", "سيئ جدًا", "سيئ", "مقبول", "جيد", "ممتاز"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary mb-4">
            <Star className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">{businessName}</h1>
          <p className="text-sm text-muted-foreground mt-1">نحب نسمع رأيك!</p>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Star Rating */}
          {step === "rating" && (
            <motion.div
              key="rating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] text-center"
            >
              <h2 className="text-lg font-semibold text-foreground mb-2">كيف كانت تجربتك؟</h2>
              <p className="text-sm text-muted-foreground mb-8">اختر تقييمك من 1 إلى 5</p>

              <div className="flex justify-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRate(value)}
                    onMouseEnter={() => setHoveredStar(value)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Star
                      className={`h-12 w-12 transition-colors duration-150 ${
                        value <= (hoveredStar || rating)
                          ? "fill-primary text-primary"
                          : "text-border"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <p className="text-sm font-medium text-muted-foreground h-5">
                {ratingLabels[hoveredStar || rating] || ""}
              </p>
            </motion.div>
          )}

          {/* Step 2a: Internal Feedback (1-3 stars) */}
          {step === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Star key={v} className={`h-5 w-5 ${v <= rating ? "fill-primary text-primary" : "text-border"}`} />
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-foreground">نأسف أن تجربتك لم تكن مثالية</h2>
                <p className="text-sm text-muted-foreground mt-1">ساعدنا نتحسّن — أخبرنا بالمشكلة</p>
              </div>

              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div>
                  <Label htmlFor="fname">الاسم (اختياري)</Label>
                  <Input
                    id="fname"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="اسمك"
                  />
                </div>
                <div>
                  <Label htmlFor="fphone">رقم الهاتف (اختياري)</Label>
                  <Input
                    id="fphone"
                    value={feedbackPhone}
                    onChange={(e) => setFeedbackPhone(e.target.value)}
                    placeholder="06XXXXXXXX"
                    dir="ltr"
                  />
                </div>
                <div>
                  <Label htmlFor="ftext">ملاحظاتك</Label>
                  <Textarea
                    id="ftext"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="أخبرنا بما يمكننا تحسينه..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-primary-foreground">
                  <Send className="ml-2 h-4 w-4" />
                  إرسال الملاحظات
                </Button>
              </form>
            </motion.div>
          )}

          {/* Step 2b: Redirect to Google (4-5 stars) */}
          {step === "redirect" && (
            <motion.div
              key="redirect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((v) => (
                  <Star key={v} className={`h-6 w-6 ${v <= rating ? "fill-primary text-primary" : "text-border"}`} />
                ))}
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">شكرًا لك! 🎉</h2>
              <p className="text-sm text-muted-foreground mb-6">
                سعداء أن تجربتك كانت رائعة! هل يمكنك مشاركة تقييمك على Google لمساعدة الآخرين؟
              </p>
              <Button
                onClick={handleGoToGoogle}
                size="lg"
                className="w-full gradient-primary text-primary-foreground h-12"
              >
                <ExternalLink className="ml-2 h-4 w-4" />
                تقييمنا على Google
              </Button>
              <button
                onClick={() => setStep("thanks")}
                className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                لا شكرًا، تخطي
              </button>
            </motion.div>
          )}

          {/* Step 3: Thank You */}
          {step === "thanks" && (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">شكرًا جزيلًا!</h2>
              <p className="text-sm text-muted-foreground">
                نقدّر وقتك ورأيك. يساعدنا هذا في تقديم خدمة أفضل لك.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[10px] text-muted-foreground/50 mt-8">
          مدعوم من <span className="font-semibold">ClientFlow</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewFunnel;
