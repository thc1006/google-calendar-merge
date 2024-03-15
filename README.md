# google-calendar-merge
Sync events from multiple Google Calendars to one destination calendar.

* You should execute the code in [Google Apps Script](https://script.google.com/home)
* Demo Code: https://script.google.com/d/1wny1iM0rwSdP6Y59dkGchSPXwMtS2wt9v8sd2ljKDyygx_UutbNoNSdJ/edit?usp=sharing

The code is a Google Calendar sync script that merges events from multiple source calendars into a single destination calendar.
Here are the steps on how the code works:
1.	The code first gets the IDs of the source and destination calendars.
2.	It then gets the events from the source calendars for the next 30 days.
3.	For each event, the code checks if it already exists in the destination calendar.
4.	If the event does not exist, the code creates a new event in the destination calendar titled "Busy".

The code can be used to sync calendars for different purposes, such as:
* Merging personal and work calendars.
* Merging calendars for different time zones.

## [中文介紹]可以讓多個 Google 日曆的活動，同步到一個日曆。
### 功能：
* 支援多個日曆整合
* 透過檢查活動，來避免事件被重複新增
* 有支援活動詳細資訊，包含：標題、開始時間、結束時間、活動說明和位置（但有些功能我註解掉了）

### Use case：
* 在一個地方追蹤所有活動
* 可以在不讓其他人看到活動標題和詳細說明的情況下，與他人分享日曆！
* 為您的團隊或組織創建主日曆

## Settings Guide
1. Open [Google Apps Script](https://script.google.com/home) create a new project.
2. Copy the [Demo Code](https://script.google.com/d/1wny1iM0rwSdP6Y59dkGchSPXwMtS2wt9v8sd2ljKDyygx_UutbNoNSdJ/edit?usp=sharing) and paste on ur new project page.
3. Replace with your Calender ID in the code, then save and execute it. :)

You can find ur calender's ID in Calender Settings and sharing（設定和共用），On the "Calendar settings" page, scroll down and you will see the Integrate calendar block（整合日曆）. The **Calendar ID** is below the Integrate calendar block.

> （記得在 App script 頁面設置一個時間觸發器，以定期同步日曆。）
> 
> Set a time trigger on the App script page so that he can synchronize the calendar regularly. 

### Others reference
* Google Calender API: https://developers.google.com/calendar/api/
* Google Apps Script: https://developers.google.com/apps-script/
