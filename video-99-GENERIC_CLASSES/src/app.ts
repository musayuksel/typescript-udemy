class DataStorage<T> {
  // data is an array of type T > we will initialize it in the constructor
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  getItems() {
    return [...this.data];
  }
}
//FLEXIBLE AND STRONG TYPING = GOOD = GENERIC CLASSES
const textStorage = new DataStorage<string>(); // we can only store STRING in this instance
textStorage.addItem('Max');
textStorage.addItem('Manu');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>(); // we can only store NUMBER in this instance
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());


// Path: video-101-GENERIC UTILITY TYPES/src/app.ts
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial type
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {//return type is CourseGoal
  let courseGoal: Partial<CourseGoal> = {};//this object will have all the properties of CourseGoal but they will be optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;//we need to cast it to CourseGoal because we are sure that it will have all the properties
}