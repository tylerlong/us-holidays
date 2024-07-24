class Year {
  public year: number;

  public constructor(year: number) {
    this.year = year;
  }

  public get newYearsDay() {
    return `${this.year}-01-01`;
  }

  // find the 3rd Monday in January
  // find the 3rd Monday in February
  // ...etc.
  public monthNthWeekday(month: number, nth: number, weekday: number) {
    const firstDay = new Date(this.year, month - 1, 1);
    const weekDay = firstDay.getDay();
    let delta = 0;
    if (weekDay <= weekday) {
      delta = weekday - weekDay;
    } else {
      delta = 7 + weekday - weekDay;
    }
    const nthWeekday = new Date(this.year, month - 1, 1 + delta + 7 * (nth - 1));
    return nthWeekday.toISOString().slice(0, 10);
  }

  public get martinLutherKingJrDay() {
    return this.monthNthWeekday(1, 3, 1);
  }

  public get washingtonsBirthday() {
    return this.monthNthWeekday(2, 3, 1);
  }

  // last Monday in May
  // should be either 4th or 5th Monday
  public get memorialDay() {
    const day = this.monthNthWeekday(5, 5, 1);
    return day > `${this.year}-05-31` ? this.monthNthWeekday(5, 4, 1) : day;
  }

  // since 2021, before 2021 it was not a federal holiday
  public get juneteenthNationalIndependenceDay() {
    return `${this.year}-06-19`;
  }

  public get independenceDay() {
    return `${this.year}-07-04`;
  }

  public get laborDay() {
    return this.monthNthWeekday(9, 1, 1);
  }

  public get columbusDay() {
    return this.monthNthWeekday(10, 2, 1);
  }

  public get veteransDay() {
    return `${this.year}-11-11`;
  }

  public get thanksgivingDay() {
    return this.monthNthWeekday(11, 4, 4);
  }

  public get christmasDay() {
    return `${this.year}-12-25`;
  }
}

export default Year;
