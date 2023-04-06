export const timeZone = () => {


    const arrDate = ['12:00 am','12:30 am',]

    for(let i=1;i<24; i++) {

        if( i<12) {
        arrDate.push(`${i}:00 am`);
        arrDate.push(`${i}:30 am`);
        } else {
            arrDate.push(`${i}:00 pm`);
            arrDate.push(`${i}:30 pm`);
        }
    };

    const timeZones = [
  "(GMT-11:00) Midway Island",
  "(GMT-10:00) Hawaii",
  "(GMT-09:00) Alaska",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT-07:00) Mountain Time (US & Canada)",
  "(GMT-06:00) Central Time (US & Canada)",
  "(GMT-05:00) Eastern Time (US & Canada)",
  "(GMT-04:30) Caracas",
  "(GMT-04:00) Atlantic Time (Canada)",
  "(GMT-04:00) La Paz",
  "(GMT-04:00) Santiago",
  "(GMT-03:30) Newfoundland",
  "(GMT-03:00) Brasilia",
  "(GMT-03:00) Buenos Aires",
  "(GMT-03:00) Greenland",
  "(GMT-02:00) Mid-Atlantic",
  "(GMT-01:00) Azores",
  "(GMT+00:00) London",
  "(GMT+01:00) Paris",
  "(GMT+03:00) Moscow",
  "(GMT-05:00) Bogota",
  "(GMT+04:00) Dubai",
  "(GMT+05:00) Karachi",
  "(GMT+05:30) Delhi",
  "(GMT+05:45) Kathmandu",
  "(GMT+06:00) Dhaka",
  "(GMT+07:00) Bangkok",
  "(GMT+08:00) Hong Kong",
  "(GMT+09:00) Tokyo",
  "(GMT+10:00) Sydney",
  "(GMT+12:00) Auckland",
  "(GMT+13:00) Nuku'alofa"
    ];

    return {arrDate,timeZones}
}