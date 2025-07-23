import React, { useState, useRef, useEffect } from "react";
import ActiveBellIcon from "../../../assets/TopNavAllPages/ActiveBellIcon";
import InactiveBellIcon from "../../../assets/TopNavAllPages/InactiveBellIcon";
import NotificationIcon from "./NotificationIcon";

const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const formatDateWithWeekday = (dateStr) => {
  const date = new Date(dateStr);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      message: "Your Request has been send to The ResumeNex team.",
      date: new Date(),
      time: "2:32pm",
    },
    {
      message:
        "Your MoU is going to Expire in 1 Day hurry and renewed your MoU",
      date: new Date(),
      time: "1:06pm",
    },
    {
      message:
        "Welcome to ResumeNex! 😊 We're thrilled to have you on board. Thank you for joining us.",
      date: new Date("2025-05-12T09:01:00"),
      time: "9:01am",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const wrapperRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setIsActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const todayNotifications = notifications.filter((n) =>
    isToday(new Date(n.date))
  );
  const earlierNotifications = notifications.filter(
    (n) => !isToday(new Date(n.date))
  );

  return (
    <div className="relative" ref={wrapperRef}>
      <div
        onClick={handleToggle}
        className={`h-[32px] ${
          isActive ? "w-[172px]" : "w-[32]"
        } justify-center rounded-full flex items-center gap-[6px] cursor-pointer transition-all duration-75 ${
          isActive
            ? "bg-[rgba(71,185,68,0.08)] hover:bg-[rgba(71,185,68,0.15)]"
            : "hover:bg-[#5d5fef1a]"
        }`}
      >
        {isActive ? (
          <>
            <ActiveBellIcon />
            <p className="font-inter font-bold text-[14px] text-[#47B944]">
              New Notification
            </p>
          </>
        ) : (
          <InactiveBellIcon />
        )}
      </div>

      {open && (
        <div className="flex flex-col p-[20px] w-[570px] h-[513px] rounded-[20px] border border-[#eeeeee] bg-[#f8fafc] gap-[20px] shadow-xl absolute top-[50px] right-0 z-10 overflow-y-auto">
          {/* Today Section */}
          {todayNotifications.length > 0 && (
            <div className="flex flex-col gap-[20px]">
              <span className="text-[#757575] text-[14px] font-semibold">
                Today
              </span>
              {todayNotifications.map((note, index) => (
                <div key={index} className="flex flex-col gap-[15px]">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex gap-[14px]">
                      <div className="w-[48px] h-[48px] bg-[#E9F9EB] rounded-[500px] flex justify-center gap-[10px] items-center">
                        <NotificationIcon />
                      </div>
                      <div className="flex flex-col w-[400px]">
                        <span className="text-[14px] font-bold text-black">
                          ResumeNex
                        </span>
                        <span className="text-[14px] font-400 font-inter  text-[#101010]">
                          {note.message}
                        </span>
                      </div>
                    </div>
                    <span className="text-[14px] font-normal font-inter text-[#000000] min-w-[52px]">
                      {note.time}
                    </span>
                  </div>
                  <hr className="w-[90%] h-0 border border-[#EEEEEE] opacity-100 mx-auto" />
                </div>
              ))}
            </div>
          )}

          {/* Earlier Section */}
          {earlierNotifications.length > 0 && (
            <div className="flex flex-col gap-[20px]">
              {earlierNotifications.map((note, index) => (
                <div key={index} className="flex flex-col gap-[15px]">
                  <span className="text-[#757575] text-[14px] font-plusjakarta font-bold">
                    {formatDateWithWeekday(note.date)}
                  </span>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex gap-[14px]">
                      <div className="w-[40px] h-[40px] bg-[#E9F9EB] rounded-full flex justify-center items-center">
                        <NotificationIcon />
                      </div>
                      <div className="flex flex-col w-[400px]">
                        <span className="text-[14px] font-bold text-black">
                          ResumeNex
                        </span>
                        <span className="text-[14px] font-inter font-500 text-[#5b5b5b]">
                          {note.message}
                        </span>
                      </div>
                    </div>
                    <span className="text-[14px] font-inter font-normal text-[#000000] min-w-[52px]">
                      {note.time}
                    </span>
                  </div>
                  <hr className="w-[90%] h-0 border border-[#EEEEEE] opacity-100 mx-auto" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
