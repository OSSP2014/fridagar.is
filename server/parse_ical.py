from icalendar import Calendar, Event
from datetime import datetime

g = open('ISL.ics','rb')
gcal = Calendar.from_ical(g.read())
for component in gcal.walk():
	if component.name == "VEVENT":
		print component.get('summary')
		print component.get('dtstart').to_ical()
		# print component.get('dtend').to_ical()

g.close()