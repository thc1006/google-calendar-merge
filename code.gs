function syncCalendars() {
  var sourceCalendarIds = ['XXX@gmail.com', 'XXX@gmail.com']; //Copy and replace your calendar ID into the "XXX@gmail.com".
  var targetCalendarId = 'XXX@gmail.com'; // Calendar ID look like: XXX@group.calendar.google.com

  var targetCalendar = CalendarApp.getCalendarById(targetCalendarId);
  
  // 清除目標日曆上現有的所有事件（這個步驟是 optional，這樣你就不用手動刪除日曆，再建立新的日曆並複製 calendar ID）
  // clear all events in target calendar (from now on to future 1 year)
  var now = new Date();
  var farFuture = new Date(now.getTime() + (365 * 24 * 60 * 60 * 1000)); // 從現在開始到未來一年
  var existingEvents = targetCalendar.getEvents(now, farFuture);
  for (var i = 0; i < existingEvents.length; i++) 
  {
    existingEvents[i].deleteEvent();
  }
  
  // Get date and config sync range 30 days
  var today = new Date();
  var thirtyDaysLater = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));

  sourceCalendarIds.forEach(function(calendarId) 
  {
    var events = CalendarApp.getCalendarById(calendarId).getEvents(today, thirtyDaysLater);
    events.forEach(function(event) 
    {
      var title = event.getTitle().trim().toLowerCase(); // 改進標題比對ㄉ機制(Optimization the comparison mechanism of calendar event title)
      var startTime = event.getStartTime();
      var endTime = event.getEndTime();

      // 檢查event是否已位於目標日曆中。(Check if the event already exists in the target calendar.)
      var existingEvents = targetCalendar.getEvents(startTime, endTime); 
      var isEventExist = existingEvents.some(function(existingEvent) 
      {
        return existingEvent.getTitle().trim().toLowerCase() === title;
      });

      if (!isEventExist) 
      {
        // 如果event不存在，則在目標日曆中創建new event；the title of new event 僅標註為"Busy"
        // If the event does not exist, create a new event in the target calendar; the title of the new event is only marked as "busy".
        targetCalendar.createEvent('Busy', startTime, endTime); 
      }
    });
  });
}
