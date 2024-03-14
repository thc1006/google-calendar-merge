function syncCalendars() {
  var sourceCalendarIds = ['XXX@gmail.com', 'XXX@gmail.com']; //Copy and replace your calendar ID into the "XXX@gmail.com"
  var targetCalendarId = 'XXX@gmail.com';
  // Calendar ID look like: XXXXXXXXXXXXXXXXXXXXXXXXXXX@group.calendar.google.com
  
  var targetCalendar = CalendarApp.getCalendarById(targetCalendarId);
  
  // Get date and config sync range
  var today = new Date();
  var thirtyDaysLater = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
  
  sourceCalendarIds.forEach(function(calendarId) 
  {
    var events = CalendarApp.getCalendarById(calendarId).getEvents(today, thirtyDaysLater);
    events.forEach(function(event) 
    {
      var title = event.getTitle();
      var startTime = event.getStartTime();
      var endTime = event.getEndTime();
      //var options = {description: event.getDescription(), location: event.getLocation()};
      
      // 檢查event是否已位於目標日曆中
      // Check if the event already exists in the target calendar.
      var existingEvents = targetCalendar.getEvents(startTime, endTime, {search: title});
      if (existingEvents.length == 0) 
      {
        // 如果event不存在，則在目標日曆中創建new event；the title of new event 僅標註為"busy"
        // If the event does not exist, create a new event in the target calendar; the title of the new event is only marked as "busy".
        targetCalendar.createEvent('busy', startTime, endTime);
      }
    });
  });
}
