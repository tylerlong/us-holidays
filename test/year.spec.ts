import Year from '../src/year';

describe('Year', () => {
  test('Holidays', () => {
    const year2024 = new Year(2024);
    expect(year2024.newYearsDay).toBe('2024-01-01');
    expect(year2024.martinLutherKingJrDay).toBe('2024-01-15');
    expect(year2024.washingtonsBirthday).toBe('2024-02-19');
    expect(year2024.goodFriday).toBe('2024-03-29');
    expect(year2024.memorialDay).toBe('2024-05-27');
    expect(year2024.juneteenthNationalIndependenceDay).toBe('2024-06-19');
    expect(year2024.independenceDay).toBe('2024-07-04');
    expect(year2024.laborDay).toBe('2024-09-02');
    expect(year2024.columbusDay).toBe('2024-10-14');
    expect(year2024.veteransDay).toBe('2024-11-11');
    expect(year2024.thanksgivingDay).toBe('2024-11-28');
    expect(year2024.christmasDay).toBe('2024-12-25');

    const year2023 = new Year(2023);
    expect(year2023.newYearsDay).toBe('2023-01-01');
    expect(year2023.martinLutherKingJrDay).toBe('2023-01-16');
    expect(year2023.washingtonsBirthday).toBe('2023-02-20');
    expect(year2023.goodFriday).toBe('2023-04-07');
    expect(year2023.memorialDay).toBe('2023-05-29');
    expect(year2023.juneteenthNationalIndependenceDay).toBe('2023-06-19');
    expect(year2023.independenceDay).toBe('2023-07-04');
    expect(year2023.laborDay).toBe('2023-09-04');
    expect(year2023.columbusDay).toBe('2023-10-09');
    expect(year2023.veteransDay).toBe('2023-11-11');
    expect(year2023.thanksgivingDay).toBe('2023-11-23');
    expect(year2023.christmasDay).toBe('2023-12-25');

    const year2022 = new Year(2022);
    expect(year2022.newYearsDay).toBe('2022-01-01');
    expect(year2022.martinLutherKingJrDay).toBe('2022-01-17');
    expect(year2022.washingtonsBirthday).toBe('2022-02-21');
    expect(year2022.goodFriday).toBe('2022-04-15');
    expect(year2022.memorialDay).toBe('2022-05-30');
    expect(year2022.juneteenthNationalIndependenceDay).toBe('2022-06-19');
    expect(year2022.independenceDay).toBe('2022-07-04');
    expect(year2022.laborDay).toBe('2022-09-05');
    expect(year2022.columbusDay).toBe('2022-10-10');
    expect(year2022.veteransDay).toBe('2022-11-11');
    expect(year2022.thanksgivingDay).toBe('2022-11-24');
    expect(year2022.christmasDay).toBe('2022-12-25');

    const year2021 = new Year(2021);
    expect(year2021.newYearsDay).toBe('2021-01-01');
    expect(year2021.martinLutherKingJrDay).toBe('2021-01-18');
    expect(year2021.washingtonsBirthday).toBe('2021-02-15');
    expect(year2021.goodFriday).toBe('2021-04-02');
    expect(year2021.memorialDay).toBe('2021-05-31');
    expect(year2021.juneteenthNationalIndependenceDay).toBe('2021-06-19');
    expect(year2021.independenceDay).toBe('2021-07-04');
    expect(year2021.laborDay).toBe('2021-09-06');
    expect(year2021.columbusDay).toBe('2021-10-11');
    expect(year2021.veteransDay).toBe('2021-11-11');
    expect(year2021.thanksgivingDay).toBe('2021-11-25');
    expect(year2021.christmasDay).toBe('2021-12-25');

    const year2020 = new Year(2020);
    expect(year2020.newYearsDay).toBe('2020-01-01');
    expect(year2020.martinLutherKingJrDay).toBe('2020-01-20');
    expect(year2020.washingtonsBirthday).toBe('2020-02-17');
    expect(year2020.goodFriday).toBe('2020-04-10');
    expect(year2020.memorialDay).toBe('2020-05-25');
    expect(year2020.juneteenthNationalIndependenceDay).toBe('2020-06-19');
    expect(year2020.independenceDay).toBe('2020-07-04');
    expect(year2020.laborDay).toBe('2020-09-07');
    expect(year2020.columbusDay).toBe('2020-10-12');
    expect(year2020.veteransDay).toBe('2020-11-11');
    expect(year2020.thanksgivingDay).toBe('2020-11-26');
    expect(year2020.christmasDay).toBe('2020-12-25');
  });
});
