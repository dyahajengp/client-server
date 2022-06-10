const activRepair = (activityUser) => {
  const newActivities = [];
  const totalActivities = activityUser.length;
  for (let i = 0; i < totalActivities; i++) {
    const activeName = activityUser[i].activityName;
    const duration = activityUser[i].duration/60;

    if (activeName === 'Cycling, mountain bike, bmx') {
      newActivities.push({
        activityName: 1,
        kind: 'g',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, <10 mph, leisure bicycling') {
      newActivities.push({
        activityName: 1,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, >20 mph, racing') {
      newActivities.push({
        activityName: 1,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, 10-11.9 mph, light') {
      newActivities.push({
        activityName: 1,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, 12-13.9 mph, moderate') {
      newActivities.push({
        activityName: 1,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, 14-15.9 mph, vigorous') {
      newActivities.push({
        activityName: 1,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Cycling, 16-19 mph, very fast, racing') {
      newActivities.push({
        activityName: 1,
        kind: 'f',
        duration: duration,
      });
    }
    if (activeName === 'Unicycling') {
      newActivities.push({
        activityName: 1,
        kind: 'h',
        duration: duration,
      });
    } else {
      newActivities.push({
        activityName: 0,
        kind: '',
        duration: duration,
      });
    }
  };
  return newActivities;
};

module.exports = {
  activRepair,
};
