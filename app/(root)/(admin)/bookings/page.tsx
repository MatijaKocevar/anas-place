"use client";

import { useEffect, useState } from "react";

type Appointment = {
    id: string;
    customerName: string;
    contact: string;
    serviceType: string;
    startTime: string;
    endTime: string;
};

type TimeSlot = {
    startTime: string;
    endTime: string;
    slotLabel: string;
    appointment?: Appointment;
};

function generateTimeSlots(): TimeSlot[] {
    const slots = [];
    let startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // Salon opens at 9 AM

    for (let i = 0; i < 12; i++) {
        // Assuming the salon is open for 12 hours
        const endTime = new Date(startTime.getTime());
        endTime.setHours(startTime.getHours() + 1);

        slots.push({
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            slotLabel: `${startTime.getHours()}:00 - ${endTime.getHours()}:00`,
        });

        startTime = endTime;
    }

    return slots;
}

export default function BookingsPage() {
    const [view, setView] = useState<"day" | "week" | "month">("day");
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch(`/api/appointments?view=${view}`);
            const data = (await response.json()) as Appointment[];
            setAppointments(data);

            // Combine appointments with time slots
            const updatedSlots = timeSlots.map((slot) => {
                const appointment = data.find(
                    (appt) =>
                        new Date(appt.startTime) >= new Date(slot.startTime) &&
                        new Date(appt.endTime) <= new Date(slot.endTime)
                );
                return { ...slot, appointment };
            });

            setTimeSlots(updatedSlots);
        };

        fetchAppointments();
    }, [view]);

    const handleViewChange = (newView: "day" | "week" | "month") => {
        setView(newView);
    };

    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <header className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Current View: {view}</h2>
                <nav className="flex space-x-4">
                    <button
                        onClick={() => handleViewChange("day")}
                        className={`px-4 py-2 rounded-lg font-semibold ${
                            view === "day"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        Day
                    </button>
                    <button
                        onClick={() => handleViewChange("week")}
                        className={`px-4 py-2 rounded-lg font-semibold ${
                            view === "week"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => handleViewChange("month")}
                        className={`px-4 py-2 rounded-lg font-semibold ${
                            view === "month"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        Month
                    </button>
                </nav>
            </header>

            <main>
                <ul className="space-y-4">
                    {timeSlots.map((slot) => (
                        <li
                            key={slot.startTime}
                            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                        >
                            <p className="text-lg font-bold">{slot.slotLabel}</p>
                            {slot.appointment ? (
                                <p className="text-gray-600">
                                    {slot.appointment.customerName} - {slot.appointment.serviceType}{" "}
                                    ({new Date(slot.appointment.startTime).toLocaleTimeString()} -{" "}
                                    {new Date(slot.appointment.endTime).toLocaleTimeString()})
                                </p>
                            ) : (
                                <p className="text-gray-500">No appointments</p>
                            )}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
