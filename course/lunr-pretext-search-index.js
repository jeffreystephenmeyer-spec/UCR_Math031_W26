var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for Math 31, Section 10 for Winter 2026.    Instructor  Dr. Jeffrey S. Meyer, Skye 223, Jeffrey.Meyer@ucr.edu .    Student Hours  MTF 1-2p,    Class meets  MW 11am-12:20pm in SSC 335    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   Concepts of Linear Algebra (COLA) by Dr. Jeffrey S. Meyer.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Math 31, Section 10 "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Class 01 - Monday 1\/5\/2026      Class - 02 - Wednesday 1\/7\/2026     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Class 03 - Monday 1\/12\/2026      Class 04 - Wednesday 1\/14\/2026     "
},
{
  "id": "notes-week-03",
  "level": "1",
  "url": "notes-week-03.html",
  "type": "Section",
  "number": "",
  "title": "Week 3",
  "body": " Week 3   No Class (MLK Day) - Monday 1\/19\/2026      Class 05 - Wednesday 1\/21\/2026     "
},
{
  "id": "notes-week-04",
  "level": "1",
  "url": "notes-week-04.html",
  "type": "Section",
  "number": "",
  "title": "Week 4",
  "body": " Week 4   Class 06 - Monday 1\/26\/2026      Class 07 - Wednesday 1\/28\/2026     "
},
{
  "id": "notes-week-05",
  "level": "1",
  "url": "notes-week-05.html",
  "type": "Section",
  "number": "",
  "title": "Week 5",
  "body": " Week 5   Class 08 - Monday 2\/2\/2026      Class 09 - Wednesday 2\/4\/2026     "
},
{
  "id": "notes-week-06",
  "level": "1",
  "url": "notes-week-06.html",
  "type": "Section",
  "number": "",
  "title": "Week 6",
  "body": " Week 6   Class 10 - Monday 2\/9\/2026      Class 11 - Wednesday 2\/11\/2026  Midterm   "
},
{
  "id": "notes-week-07",
  "level": "1",
  "url": "notes-week-07.html",
  "type": "Section",
  "number": "",
  "title": "Week 7",
  "body": " Week 7   No Class (President's Day) - Monday 2\/16\/2026      Class 12 - Wednesday 2\/18\/2026     "
},
{
  "id": "notes-week-08",
  "level": "1",
  "url": "notes-week-08.html",
  "type": "Section",
  "number": "",
  "title": "Week 8",
  "body": " Week 8   Class 13 - Monday 2\/23\/2026      Class 14 - Wednesday 2\/25\/2026     "
},
{
  "id": "notes-week-09",
  "level": "1",
  "url": "notes-week-09.html",
  "type": "Section",
  "number": "",
  "title": "Week 9",
  "body": " Week 9   Class 15 - Monday 3\/2\/2026      Class 16 - Wednesday 3\/4\/2026     "
},
{
  "id": "notes-week-10",
  "level": "1",
  "url": "notes-week-10.html",
  "type": "Section",
  "number": "",
  "title": "Week 10",
  "body": " Week 10   Class 17 - Monday 3\/9\/2026      Class 18 - Wednesday 3\/11\/2026     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
