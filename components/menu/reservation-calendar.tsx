"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ReservationCalendarProps {
  onBack: () => void
  onConfirm: (date: Date) => void
}

const LUNCH_SLOTS = ["12:00", "12:30", "13:00", "13:30", "14:00"]
const DINNER_SLOTS = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
const MONTH_LABELS = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
]

function isPast(date: Date, time: string) {
  const [h, m] = time.split(":").map(Number)
  const dt = new Date(date)
  dt.setHours(h, m, 0, 0)
  return dt.getTime() <= Date.now()
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function ReservationCalendar({ onBack, onConfirm }: ReservationCalendarProps) {
  const days = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return Array.from({ length: 14 }, (_, i) => {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      return d
    })
  }, [])

  const [selectedDay, setSelectedDay] = useState<Date>(days[0])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const today = new Date()

  function handleConfirm() {
    if (!selectedTime) return
    const [h, m] = selectedTime.split(":").map(Number)
    const dt = new Date(selectedDay)
    dt.setHours(h, m, 0, 0)
    onConfirm(dt)
  }

  const renderSlots = (slots: string[]) => (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((time) => {
        const disabled = isPast(selectedDay, time)
        const active = selectedTime === time
        return (
          <button
            key={time}
            disabled={disabled}
            onClick={() => setSelectedTime(time)}
            className={[
              "rounded-lg border py-2.5 text-sm font-medium tabular-nums transition-colors",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-foreground hover:border-primary/50",
              disabled && "opacity-40 cursor-not-allowed hover:border-border",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {time}
          </button>
        )
      })}
    </div>
  )

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border px-5 pb-3 pt-4">
        <button
          onClick={onBack}
          className="flex size-7 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Retour"
        >
          <ChevronLeft size={16} />
        </button>
        <h2 className="text-base font-semibold">Choisir un créneau</h2>
      </div>

      {/* Day strip */}
      <div className="border-b border-border px-5 py-3">
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-1">
            {days.map((d) => {
              const active = sameDay(d, selectedDay)
              const isToday = sameDay(d, today)
              return (
                <button
                  key={d.toISOString()}
                  onClick={() => {
                    setSelectedDay(d)
                    setSelectedTime(null)
                  }}
                  className={[
                    "flex shrink-0 flex-col items-center rounded-xl border px-3 py-2 min-w-[58px] transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary text-foreground hover:border-primary/50",
                  ].join(" ")}
                >
                  <span className="text-[10px] font-medium uppercase opacity-80">
                    {DAY_LABELS[d.getDay()]}
                  </span>
                  <span className="text-lg font-bold leading-tight tabular-nums">
                    {d.getDate()}
                  </span>
                  <span className="text-[10px] opacity-80">
                    {isToday ? "auj." : MONTH_LABELS[d.getMonth()]}
                  </span>
                </button>
              )
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Slots */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="px-5 py-4 space-y-5">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Déjeuner
            </p>
            {renderSlots(LUNCH_SLOTS)}
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Dîner
            </p>
            {renderSlots(DINNER_SLOTS)}
          </div>
        </div>
      </ScrollArea>

      {/* CTA */}
      <div className="border-t border-border bg-background px-5 pb-6 pt-4">
        <Button
          className="w-full"
          size="lg"
          disabled={!selectedTime}
          onClick={handleConfirm}
        >
          <Check size={16} className="mr-1" />
          {selectedTime
            ? `Confirmer · ${DAY_LABELS[selectedDay.getDay()]} ${selectedDay.getDate()} ${MONTH_LABELS[selectedDay.getMonth()]} à ${selectedTime}`
            : "Choisir une heure"}
        </Button>
      </div>
    </>
  )
}
