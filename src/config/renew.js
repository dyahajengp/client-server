const activRepair = (activityUser) => {
  const newActivities = [];
  const totalActivities = activityUser.length;
  for (let i = 0; i < totalActivities; i++) {
    const activeName = activityUser[i].activityName;
    const duration = activityUser[i].duration/60;

    // 1. Cycling
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
    }

    // 2. Stationary Cycling
    if (activeName === 'Stationary cycling, very light') {
      newActivities.push({
        activityName: 2,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Stationary cycling, light') {
      newActivities.push({
        activityName: 2,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Stationary cycling, moderate') {
      newActivities.push({
        activityName: 2,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Stationary cycling, vigorous') {
      newActivities.push({
        activityName: 2,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Stationary cycling, very vigorous') {
      newActivities.push({
        activityName: 2,
        kind: 'e',
        duration: duration,
      });
    }

    // 3. Calisthenics
    if (activeName === 'Calisthenics, vigorous, pushups, situps') {
      newActivities.push({
        activityName: 3,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Calisthenics, light') {
      newActivities.push({
        activityName: 3,
        kind: 'a',
        duration: duration,
      });
    }

    // 4. Circuit training
    if (activeName === 'Circuit training, minimal rest') {
      newActivities.push({
        activityName: 4,
        kind: '',
        duration: duration,
      });
    }

    // 5. Weight lifting
    if (activeName === 'Weight lifting, body building, vigorous') {
      newActivities.push({
        activityName: 5,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Weight lifting, light workout') {
      newActivities.push({
        activityName: 5,
        kind: 'a',
        duration: duration,
      });
    }

    // 6. Health club exercise
    if (activeName === 'Health club exercise') {
      newActivities.push({
        activityName: 6,
        kind: '',
        duration: duration,
      });
    }

    // 7. Stair machine
    if (activeName === 'Stair machine') {
      newActivities.push({
        activityName: 7,
        kind: '',
        duration: duration,
      });
    }

    // 8. Rowing machine
    if (activeName === 'Rowing machine, light') {
      newActivities.push({
        activityName: 8,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Rowing machine, moderate') {
      newActivities.push({
        activityName: 8,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Rowing machine, vigorous') {
      newActivities.push({
        activityName: 8,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Rowing machine, very vigorous') {
      newActivities.push({
        activityName: 8,
        kind: 'd',
        duration: duration,
      });
    }

    // 9. Ski machine
    if (activeName === 'Ski machine') {
      newActivities.push({
        activityName: 9,
        kind: '',
        duration: duration,
      });
    }

    // 10. Aerobics
    if (activeName === 'Aerobics, low impact') {
      newActivities.push({
        activityName: 10,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Aerobics, high impact') {
      newActivities.push({
        activityName: 10,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Aerobics, step aerobics') {
      newActivities.push({
        activityName: 10,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Aerobics, general') {
      newActivities.push({
        activityName: 10,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Instructing aerobic class') {
      newActivities.push({
        activityName: 10,
        kind: 'e',
        duration: duration,
      });
    }

    // 11. Water aerobics
    if (activeName === 'Water aerobics') {
      newActivities.push({
        activityName: 11,
        kind: '',
        duration: duration,
      });
    }

    // 12. Jazzercise
    if (activeName === 'Jazzercise') {
      newActivities.push({
        activityName: 12,
        kind: '',
        duration: duration,
      });
    }

    // 13. Streching
    if (activeName === 'Stretching, hatha yoga') {
      newActivities.push({
        activityName: 13,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Mild stretching') {
      newActivities.push({
        activityName: 13,
        kind: 'a',
        duration: duration,
      });
    }

    // 14. Ballet, twist, jazz, tap
    if (activeName === 'Ballet, twist, jazz, tap') {
      newActivities.push({
        activityName: 14,
        kind: '',
        duration: duration,
      });
    }

    // 15. Ballroom dancing
    if (activeName === 'Ballroom dancing, slow') {
      newActivities.push({
        activityName: 15,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Ballroom dancing, fast') {
      newActivities.push({
        activityName: 15,
        kind: 'b',
        duration: duration,
      });
    }

    // 16. Running
    if (activeName === 'Running, 5 mph (12 minute mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Running, 5.2 mph (11.5 minute mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Running, 6 mph (10 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Running, 6.7 mph (9 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Running, 7 mph (8.5 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Running, 7.5mph (8 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'f',
        duration: duration,
      });
    }
    if (activeName === 'Running, 8 mph (7.5 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'g',
        duration: duration,
      });
    }
    if (activeName === 'Running, 8.6 mph (7 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'h',
        duration: duration,
      });
    }
    if (activeName === 'Running, 9 mph (6.5 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'i',
        duration: duration,
      });
    }
    if (activeName === 'Running, 10 mph (6 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'j',
        duration: duration,
      });
    }
    if (activeName === 'Running, 10.9 mph (5.5 min mile)') {
      newActivities.push({
        activityName: 16,
        kind: 'k',
        duration: duration,
      });
    }
    if (activeName === 'Running, cross country') {
      newActivities.push({
        activityName: 16,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Running, general') {
      newActivities.push({
        activityName: 16,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Running, on a track, team practice') {
      newActivities.push({
        activityName: 16,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Running, stairs, up') {
      newActivities.push({
        activityName: 16,
        kind: 'i',
        duration: duration,
      });
    }
    // if (activeName === '') {
    //   newActivities.push({
    //     activityName: 16,
    //     kind: 'p',
    //     duration: duration,
    //   });
    // }
    // if (activeName === '') {
    //   newActivities.push({
    //     activityName: 16,
    //     kind: 'q',
    //     duration: duration,
    //   });
    // }

    // 17. Track and field
    if (activeName === 'Track and field (shot, discus)') {
      newActivities.push({
        activityName: 17,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Track and field (high jump, pole vault)') {
      newActivities.push({
        activityName: 17,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Track and field (hurdles)') {
      newActivities.push({
        activityName: 17,
        kind: 'c',
        duration: duration,
      });
    }

    // 18. Archery
    if (activeName === 'Archery') {
      newActivities.push({
        activityName: 18,
        kind: '',
        duration: duration,
      });
    }

    // 19. Badminton
    if (activeName === 'Badminton') {
      newActivities.push({
        activityName: 19,
        kind: '',
        duration: duration,
      });
    }

    // 20. Basketball
    if (activeName === 'Basketball game, competitive') {
      newActivities.push({
        activityName: 20,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Playing basketball, non game') {
      newActivities.push({
        activityName: 20,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Basketball, officiating') {
      newActivities.push({
        activityName: 20,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Basketball, shooting baskets') {
      newActivities.push({
        activityName: 20,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Basketball, wheelchair') {
      newActivities.push({
        activityName: 20,
        kind: 'c',
        duration: duration,
      });
    }
    // if (activeName === 'Running, training, pushing wheelchair') {
    //   newActivities.push({
    //     activityName: 20,
    //     kind: 'f',
    //     duration: duration,
    //   });
    // }

    // 21. Billiards
    if (activeName === 'Billiards') {
      newActivities.push({
        activityName: 21,
        kind: '',
        duration: duration,
      });
    }

    // 22. Bowling
    if (activeName === 'Bowling') {
      newActivities.push({
        activityName: 22,
        kind: '',
        duration: duration,
      });
    }

    // 23. Boxing
    if (activeName === 'Boxing, in ring') {
      newActivities.push({
        activityName: 23,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Boxing, punching bag') {
      newActivities.push({
        activityName: 23,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Boxing, sparring') {
      newActivities.push({
        activityName: 23,
        kind: 'b',
        duration: duration,
      });
    }

    // 24. Coaching: football, basketball, soccer
    if (activeName === 'Coaching: football, basketball, soccer') {
      newActivities.push({
        activityName: 24,
        kind: '',
        duration: duration,
      });
    }

    // 25. Cricket
    if (activeName === 'Cricket (batting, bowling)') {
      newActivities.push({
        activityName: 25,
        kind: '',
        duration: duration,
      });
    }

    // 26. Croquet
    if (activeName === 'Croquet') {
      newActivities.push({
        activityName: 26,
        kind: '',
        duration: duration,
      });
    }

    // 27. Curling
    if (activeName === 'Curling') {
      newActivities.push({
        activityName: 27,
        kind: '',
        duration: duration,
      });
    }

    // 28. Darts (wall or lawn)
    if (activeName === 'Darts (wall or lawn)') {
      newActivities.push({
        activityName: 28,
        kind: '',
        duration: duration,
      });
    }

    // 29. Fencing
    if (activeName === 'Fencing') {
      newActivities.push({
        activityName: 29,
        kind: '',
        duration: duration,
      });
    }

    // 30. Football
    if (activeName === 'Football, competitive') {
      newActivities.push({
        activityName: 30,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Football, touch, flag, general') {
      newActivities.push({
        activityName: 30,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Football or baseball, playing catch') {
      newActivities.push({
        activityName: 30,
        kind: 'a',
        duration: duration,
      });
    }

    // 31. Frisbee
    if (activeName === 'Frisbee playing, general') {
      newActivities.push({
        activityName: 32,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Frisbee, ultimate frisbee') {
      newActivities.push({
        activityName: 32,
        kind: 'b',
        duration: duration,
      });
    }

    // 32. Golf
    if (activeName === 'Golf, general') {
      newActivities.push({
        activityName: 32,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Golf, walking and carrying clubs') {
      newActivities.push({
        activityName: 32,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Golf, driving range') {
      newActivities.push({
        activityName: 32,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Golf, miniature golf') {
      newActivities.push({
        activityName: 32,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Golf, walking and pulling clubs') {
      newActivities.push({
        activityName: 32,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Golf, using power cart') {
      newActivities.push({
        activityName: 32,
        kind: 'b',
        duration: duration,
      });
    }

    // 33. Gymnastics
    if (activeName === 'Gymnastics') {
      newActivities.push({
        activityName: 33,
        kind: '',
        duration: duration,
      });
    }

    // 34. Hacky sack
    if (activeName === 'Hacky sack') {
      newActivities.push({
        activityName: 34,
        kind: '',
        duration: duration,
      });
    }

    // 35. Handball
    if (activeName === 'Handball') {
      newActivities.push({
        activityName: 35,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Handball, team') {
      newActivities.push({
        activityName: 35,
        kind: 'a',
        duration: duration,
      });
    }

    // 36. Hockey (field or ice hockey)
    if (activeName === 'Hockey, field hockey') {
      newActivities.push({
        activityName: 36,
        kind: '',
        duration: duration,
      });
    }
    if (activeName === 'Hockey, ice hockey') {
      newActivities.push({
        activityName: 36,
        kind: '',
        duration: duration,
      });
    }

    // 37. Riding a horse
    if (activeName === 'Riding a horse, general') {
      newActivities.push({
        activityName: 37,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Horesback riding, saddling horse') {
      newActivities.push({
        activityName: 37,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Horseback riding, grooming horse') {
      newActivities.push({
        activityName: 37,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Horseback riding, trotting') {
      newActivities.push({
        activityName: 37,
        kind: 'f',
        duration: duration,
      });
    }
    if (activeName === 'Horseback riding, walking') {
      newActivities.push({
        activityName: 37,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Horse racing, galloping') {
      newActivities.push({
        activityName: 37,
        kind: 'g',
        duration: duration,
      });
    }
    if (activeName === 'Horse grooming, moderate') {
      newActivities.push({
        activityName: 37,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Horseshoe pitching') {
      newActivities.push({
        activityName: 37,
        kind: 'b',
        duration: duration,
      });
    }

    // 38. Jai alai
    if (activeName === 'Jai alai') {
      newActivities.push({
        activityName: 38,
        kind: '',
        duration: duration,
      });
    }

    // 39. Martial arts
    if (activeName === 'Martial arts, judo, karate, jujitsu') {
      newActivities.push({
        activityName: 39,
        kind: '',
        duration: duration,
      });
    }
    if (activeName === 'Martial arts, kick boxing') {
      newActivities.push({
        activityName: 39,
        kind: '',
        duration: duration,
      });
    }
    if (activeName === 'Martial arts, tae kwan do') {
      newActivities.push({
        activityName: 39,
        kind: '',
        duration: duration,
      });
    }

    // 40. Krav maga training
    if (activeName === 'Krav maga training') {
      newActivities.push({
        activityName: 40,
        kind: '',
        duration: duration,
      });
    }

    // 41. Juggling
    if (activeName === 'Juggling') {
      newActivities.push({
        activityName: 41,
        kind: '',
        duration: duration,
      });
    }

    // 42. Kickball
    if (activeName === 'Kickball') {
      newActivities.push({
        activityName: 42,
        kind: '',
        duration: duration,
      });
    }

    // 43. Lacrosse
    if (activeName === 'Lacrosse') {
      newActivities.push({
        activityName: 43,
        kind: '',
        duration: duration,
      });
    }

    // 44. Orienteering
    if (activeName === 'Orienteering') {
      newActivities.push({
        activityName: 44,
        kind: '',
        duration: duration,
      });
    }

    // 45. Paddleball
    if (activeName === 'Playing paddleball') {
      newActivities.push({
        activityName: 45,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Paddleball, competitive') {
      newActivities.push({
        activityName: 45,
        kind: 'b',
        duration: duration,
      });
    }

    // 46. Polo
    if (activeName === 'Polo') {
      newActivities.push({
        activityName: 46,
        kind: '',
        duration: duration,
      });
    }

    // 47. Racquetball
    if (activeName === 'Racquetball, competitive') {
      newActivities.push({
        activityName: 47,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Playing racquetball') {
      newActivities.push({
        activityName: 47,
        kind: 'a',
        duration: duration,
      });
    }

    // 48. Rock climbing
    if (activeName === 'Rock climbing, ascending rock') {
      newActivities.push({
        activityName: 48,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Rock climbing, rappelling') {
      newActivities.push({
        activityName: 48,
        kind: 'a',
        duration: duration,
      });
    }

    // 49. Jumping rope
    if (activeName === 'Jumping rope, fast') {
      newActivities.push({
        activityName: 49,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Jumping rope, moderate') {
      newActivities.push({
        activityName: 49,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Jumping rope, slow') {
      newActivities.push({
        activityName: 49,
        kind: 'a',
        duration: duration,
      });
    }

    // 50. Rugby
    if (activeName === 'Rugby') {
      newActivities.push({
        activityName: 50,
        kind: '',
        duration: duration,
      });
    }

    // 51. Shuffleboard, lawn bowling
    if (activeName === 'Shuffleboard, lawn bowling') {
      newActivities.push({
        activityName: 51,
        kind: '',
        duration: duration,
      });
    }

    // 52. Skateboarding
    if (activeName === 'Skateboarding') {
      newActivities.push({
        activityName: 52,
        kind: '',
        duration: duration,
      });
    }

    // 53. Roller skating
    if (activeName === 'Roller skating') {
      newActivities.push({
        activityName: 53,
        kind: '',
        duration: duration,
      });
    }

    // 54. Roller blading, in-line skating
    if (activeName === 'Roller blading, in-line skating') {
      newActivities.push({
        activityName: 54,
        kind: '',
        duration: duration,
      });
    }

    // 55. Sky diving
    if (activeName === 'Sky diving') {
      newActivities.push({
        activityName: 55,
        kind: '',
        duration: duration,
      });
    }

    // 56. Soccer
    if (activeName === 'Soccer, competitive') {
      newActivities.push({
        activityName: 56,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Playing soccer') {
      newActivities.push({
        activityName: 56,
        kind: 'a',
        duration: duration,
      });
    }

    // 57. Baseball
    if (activeName === 'Softball or baseball') {
      newActivities.push({
        activityName: 57,
        kind: '',
        duration: duration,
      });
    }

    // 58. Softball
    if (activeName === 'Softball, officiating') {
      newActivities.push({
        activityName: 58,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Softball, pitching') {
      newActivities.push({
        activityName: 58,
        kind: 'b',
        duration: duration,
      });
    }

    // 59. Squash
    if (activeName === 'Squash') {
      newActivities.push({
        activityName: 59,
        kind: '',
        duration: duration,
      });
    }

    // 60. Table tennis, ping pong
    if (activeName === 'Table tennis, ping pong') {
      newActivities.push({
        activityName: 60,
        kind: '',
        duration: duration,
      });
    }

    // 61. Tai chi
    if (activeName === 'Tai chi') {
      newActivities.push({
        activityName: 61,
        kind: '',
        duration: duration,
      });
    }

    // 62. Tennis
    if (activeName === 'Playing tennis') {
      newActivities.push({
        activityName: 62,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Tennis, doubles') {
      newActivities.push({
        activityName: 62,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Tennis, singles') {
      newActivities.push({
        activityName: 62,
        kind: 'a',
        duration: duration,
      });
    }

    // 63. Trampoline
    if (activeName === 'Trampoline') {
      newActivities.push({
        activityName: 63,
        kind: '',
        duration: duration,
      });
    }

    // 64. Volleyball
    if (activeName === 'Volleyball, competitive') {
      newActivities.push({
        activityName: 64,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Playing volleyball') {
      newActivities.push({
        activityName: 64,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Volleyball, beach') {
      newActivities.push({
        activityName: 64,
        kind: 'b',
        duration: duration,
      });
    }

    // 65. Wrestling
    if (activeName === 'Wrestling') {
      newActivities.push({
        activityName: 65,
        kind: '',
        duration: duration,
      });
    }

    // 66. Wallyball
    if (activeName === 'Wallyball') {
      newActivities.push({
        activityName: 66,
        kind: '',
        duration: duration,
      });
    }

    // 67. Backpacking, hiking with pack
    if (activeName === 'Backpacking, Hiking with pack') {
      newActivities.push({
        activityName: 67,
        kind: '',
        duration: duration,
      });
    }

    // 68. Carrying infant
    if (activeName === 'Carrying infant, level ground') {
      newActivities.push({
        activityName: 68,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Carrying infant, upstairs') {
      newActivities.push({
        activityName: 68,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Carrying 16 to 24 lbs, upstairs') {
      newActivities.push({
        activityName: 68,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Carrying 25 to 49 lbs, upstairs') {
      newActivities.push({
        activityName: 68,
        kind: 'd',
        duration: duration,
      });
    }

    // 69. Playing with children
    if (activeName === 'Standing, playing with children, light') {
      newActivities.push({
        activityName: 69,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Walk/run, playing with children, moderate') {
      newActivities.push({
        activityName: 69,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Walk/run, playing with children, vigorous') {
      newActivities.push({
        activityName: 69,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Carrying small children') {
      newActivities.push({
        activityName: 69,
        kind: 'd',
        duration: duration,
      });
    }

    // 70. Loading, unloading car
    if (activeName === 'Loading, unloading car') {
      newActivities.push({
        activityName: 70,
        kind: '',
        duration: duration,
      });
    }

    // 71. Climbing hills
    if (activeName === 'Climbing hills, carrying up to 9 lbs') {
      newActivities.push({
        activityName: 71,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Climbing hills, carrying 10 to 20 lb') {
      newActivities.push({
        activityName: 71,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Climbing hills, carrying 21 to 42 lb') {
      newActivities.push({
        activityName: 71,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Climbing hills, carrying over 42 lb') {
      newActivities.push({
        activityName: 71,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Walking downstairs') {
      newActivities.push({
        activityName: 79,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Hiking, cross country') {
      newActivities.push({
        activityName: 67,
        kind: '',
        duration: duration,
      });
    }

    // 72. Bird watching
    if (activeName === 'Bird watching') {
      newActivities.push({
        activityName: 72,
        kind: '',
        duration: duration,
      });
    }

    // 73. Marching, rapidly, military
    if (activeName === 'Marching, rapidly, military') {
      newActivities.push({
        activityName: 73,
        kind: '',
        duration: duration,
      });
    }

    // 74. Children's game, hopscocth, dodgeball
    if (activeName === 'Children\'s games, hopscotch, dodgeball') {
      newActivities.push({
        activityName: 74,
        kind: '',
        duration: duration,
      });
    }

    // 75. Pushing stroller or walking with children
    if (activeName === 'Pushing stroller or walking with children') {
      newActivities.push({
        activityName: 75,
        kind: '',
        duration: duration,
      });
    }

    // 76. Pushing a wheelchair
    if (activeName === 'Pushing a wheelchair') {
      newActivities.push({
        activityName: 76,
        kind: '',
        duration: duration,
      });
    }

    // 77. Race walking
    if (activeName === 'Race walking') {
      newActivities.push({
        activityName: 77,
        kind: '',
        duration: duration,
      });
    }

    // 78. Rock climbing, mountain climbing
    if (activeName === 'Rock climbing, mountain climbing') {
      newActivities.push({
        activityName: 78,
        kind: '',
        duration: duration,
      });
    }

    // 79. Walking
    if (activeName === 'Walking using crutches') {
      newActivities.push({
        activityName: 79,
        kind: 'f',
        duration: duration,
      });
    }
    if (activeName === 'Walking the dog') {
      newActivities.push({
        activityName: 79,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Walking, under 2.0 mph, very slow') {
      newActivities.push({
        activityName: 79,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Walking 2.0 mph, slow') {
      newActivities.push({
        activityName: 79,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Walking 2.5 mph') {
      newActivities.push({
        activityName: 79,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Walking 3.0 mph, moderate') {
      newActivities.push({
        activityName: 79,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Walking 3.5 mph, brisk pace') {
      newActivities.push({
        activityName: 79,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Walking 3.5 mph, uphill') {
      newActivities.push({
        activityName: 79,
        kind: 'h',
        duration: duration,
      });
    }
    if (activeName === 'Walking 4.0 mph, very brisk') {
      newActivities.push({
        activityName: 79,
        kind: 'g',
        duration: duration,
      });
    }
    if (activeName === 'Walking 4.5 mph') {
      newActivities.push({
        activityName: 79,
        kind: 'i',
        duration: duration,
      });
    }
    if (activeName === 'Walking 5.0 mph') {
      newActivities.push({
        activityName: 79,
        kind: 'j',
        duration: duration,
      });
    }

    // 80. Boating, power, speed boat
    if (activeName === 'Boating, power, speed boat') {
      newActivities.push({
        activityName: 80,
        kind: '',
        duration: duration,
      });
    }

    // 81. Canoeing
    if (activeName === 'Canoeing, camping trip') {
      newActivities.push({
        activityName: 81,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Canoeing, rowing, light') {
      newActivities.push({
        activityName: 81,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Canoeing, rowing, moderate') {
      newActivities.push({
        activityName: 81,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Canoeing, rowing, vigorous') {
      newActivities.push({
        activityName: 81,
        kind: 'd',
        duration: duration,
      });
    }

    // 82. Crew, sculling, rowing
    if (activeName === 'Crew, sculling, rowing, competition') {
      newActivities.push({
        activityName: 82,
        kind: '',
        duration: duration,
      });
    }

    // 83. Kayaking
    if (activeName === 'Kayaking') {
      newActivities.push({
        activityName: 83,
        kind: '',
        duration: duration,
      });
    }

    // 84. Paddle boat
    if (activeName === 'Paddle boat') {
      newActivities.push({
        activityName: 84,
        kind: '',
        duration: duration,
      });
    }

    // 85. Windsurfing
    if (activeName === 'Windsurfing, sailing') {
      newActivities.push({
        activityName: 85,
        kind: '',
        duration: duration,
      });
    }

    // 86. Sailing
    if (activeName === 'Sailing, competition') {
      newActivities.push({
        activityName: 86,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Sailing, yachting, ocean sailing') {
      newActivities.push({
        activityName: 86,
        kind: 'b',
        duration: duration,
      });
    }

    // 87. Skiing
    if (activeName === 'Skiing, water skiing') {
      newActivities.push({
        activityName: 87,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Ski mobiling') {
      newActivities.push({
        activityName: 87,
        kind: 'b',
        duration: duration,
      });
    }

    // 88. Skin diving
    if (activeName === 'Skin diving, fast') {
      newActivities.push({
        activityName: 88,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Skin diving, moderate') {
      newActivities.push({
        activityName: 88,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Skin diving, scuba diving') {
      newActivities.push({
        activityName: 88,
        kind: 'a',
        duration: duration,
      });
    }

    // 89. Snorkeling
    if (activeName === 'Snorkeling') {
      newActivities.push({
        activityName: 89,
        kind: '',
        duration: duration,
      });
    }

    // 90. Surfing, body surfing or board surfing
    if (activeName === 'Surfing, body surfing or board surfing') {
      newActivities.push({
        activityName: 90,
        kind: '',
        duration: duration,
      });
    }

    // 91. Whitewater rafting
    if (activeName === 'Whitewater rafting, kayaking, canoeing') {
      newActivities.push({
        activityName: 91,
        kind: '',
        duration: duration,
      });
    }

    // 92. Swimming
    if (activeName === 'Swimming laps, freestyle, fast') {
      newActivities.push({
        activityName: 92,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Swimming laps, freestyle, slow') {
      newActivities.push({
        activityName: 92,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Swimming backstroke') {
      newActivities.push({
        activityName: 92,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Swimming breaststroke') {
      newActivities.push({
        activityName: 92,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Swimming butterfly') {
      newActivities.push({
        activityName: 92,
        kind: 'e',
        duration: duration,
      });
    }
    if (activeName === 'Swimming leisurely, not laps') {
      newActivities.push({
        activityName: 92,
        kind: 'f',
        duration: duration,
      });
    }
    if (activeName === 'Swimming sidestroke') {
      newActivities.push({
        activityName: 92,
        kind: 'g',
        duration: duration,
      });
    }
    if (activeName === 'Swimming synchronized') {
      newActivities.push({
        activityName: 92,
        kind: 'h',
        duration: duration,
      });
    }
    if (activeName === 'Swimming, treading water, fast, vigorous') {
      newActivities.push({
        activityName: 92,
        kind: 'j',
        duration: duration,
      });
    }
    if (activeName === 'Swimming, treading water, moderate') {
      newActivities.push({
        activityName: 92,
        kind: 'i',
        duration: duration,
      });
    }

    // 93. Water aerobics
    if (activeName === 'Water aerobics, water calisthenics') {
      newActivities.push({
        activityName: 93,
        kind: '',
        duration: duration,
      });
    }

    // 94. Water polo
    if (activeName === 'Water polo') {
      newActivities.push({
        activityName: 94,
        kind: '',
        duration: duration,
      });
    }

    // 95. Water volleyball
    if (activeName === 'Water volleyball') {
      newActivities.push({
        activityName: 95,
        kind: '',
        duration: duration,
      });
    }

    // 96. Water jogging
    if (activeName === 'Water jogging') {
      newActivities.push({
        activityName: 96,
        kind: '',
        duration: duration,
      });
    }

    // 97. Diving, springboard or platform
    if (activeName === 'Diving, springboard or platform') {
      newActivities.push({
        activityName: 97,
        kind: '',
        duration: duration,
      });
    }

    // 98. Ice skating
    if (activeName === 'Ice skating, < 9 mph') {
      newActivities.push({
        activityName: 98,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Ice skating, average speed') {
      newActivities.push({
        activityName: 98,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Ice skating, rapidly') {
      newActivities.push({
        activityName: 98,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Speed skating, ice, competitive') {
      newActivities.push({
        activityName: 98,
        kind: 'd',
        duration: duration,
      });
    }

    // 99. Cross country snow skiing
    if (activeName === 'Cross country snow skiing, slow') {
      newActivities.push({
        activityName: 99,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Cross country skiing, moderate') {
      newActivities.push({
        activityName: 99,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Cross country skiing, vigorous') {
      newActivities.push({
        activityName: 99,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Cross country skiing, racing') {
      newActivities.push({
        activityName: 99,
        kind: 'd',
        duration: duration,
      });
    }
    if (activeName === 'Cross country skiing, uphill') {
      newActivities.push({
        activityName: 99,
        kind: 'e',
        duration: duration,
      });
    }

    // 100. Downhill snow skiing
    if (activeName === 'Snow skiing, downhill skiing, light') {
      newActivities.push({
        activityName: 100,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Downhill snow skiing, moderate') {
      newActivities.push({
        activityName: 100,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Downhill snow skiing, racing') {
      newActivities.push({
        activityName: 100,
        kind: 'c',
        duration: duration,
      });
    }

    // 101. Sledding, tobagganing, luge
    if (activeName === 'Sledding, tobagganing, luge') {
      newActivities.push({
        activityName: 101,
        kind: '',
        duration: duration,
      });
    }

    // 102. Snow shoeing
    if (activeName === 'Snow shoeing') {
      newActivities.push({
        activityName: 102,
        kind: '',
        duration: duration,
      });
    }

    // 103. Snowmobiling
    if (activeName === 'Snowmobiling') {
      newActivities.push({
        activityName: 103,
        kind: '',
        duration: duration,
      });
    }

    // 104. General Housework
    if (activeName === 'General housework') {
      newActivities.push({
        activityName: 104,
        kind: '',
        duration: duration,
      });
    }

    // 105. Cleaning gutters
    if (activeName === 'Cleaning gutters') {
      newActivities.push({
        activityName: 105,
        kind: '',
        duration: duration,
      });
    }

    // 106. Painting
    if (activeName === 'Painting') {
      newActivities.push({
        activityName: 106,
        kind: '',
        duration: duration,
      });
    }

    // 107. Playing with animal
    if (activeName === 'Sit, playing with animals') {
      newActivities.push({
        activityName: 107,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Walk / run, playing with animals') {
      newActivities.push({
        activityName: 107,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Bathing dog') {
      newActivities.push({
        activityName: 107,
        kind: 'c',
        duration: duration,
      });
    }

    // 108. Mowing lawn
    if (activeName === 'Mowing lawn, walk, power mower') {
      newActivities.push({
        activityName: 108,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Mowing lawn, riding mower') {
      newActivities.push({
        activityName: 108,
        kind: 'b',
        duration: duration,
      });
    }

    // 109. Snow blower
    if (activeName === 'Walking, snow blower') {
      newActivities.push({
        activityName: 109,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Riding, snow blower') {
      newActivities.push({
        activityName: 109,
        kind: 'a',
        duration: duration,
      });
    }

    // 110. Shoveling snow by hand
    if (activeName === 'Shoveling snow by hand') {
      newActivities.push({
        activityName: 109,
        kind: '',
        duration: duration,
      });
    }

    // 111. Raking lawn
    if (activeName === 'Raking lawn') {
      newActivities.push({
        activityName: 111,
        kind: '',
        duration: duration,
      });
    }

    // 112. Gardening
    if (activeName === 'Gardening, general') {
      newActivities.push({
        activityName: 112,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Bagging grass, leaves') {
      newActivities.push({
        activityName: 112,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Watering lawn or garden') {
      newActivities.push({
        activityName: 112,
        kind: 'c',
        duration: duration,
      });
    }
    if (activeName === 'Weeding, cultivating garden') {
      newActivities.push({
        activityName: 112,
        kind: 'd',
        duration: duration,
      });
    }

    // 113. Carpentry
    if (activeName === 'Carpentry, general') {
      newActivities.push({
        activityName: 113,
        kind: '',
        duration: duration,
      });
    }

    // 114. Carrying loads
    if (activeName === 'Carrying heavy loads') {
      newActivities.push({
        activityName: 114,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Carrying moderate loads upstairs') {
      newActivities.push({
        activityName: 114,
        kind: 'b',
        duration: duration,
      });
    }

    // 115. Cleaning
    if (activeName === 'General cleaning') {
      newActivities.push({
        activityName: 115,
        kind: 'a',
        duration: duration,
      });
    }
    if (activeName === 'Cleaning, dusting') {
      newActivities.push({
        activityName: 115,
        kind: 'b',
        duration: duration,
      });
    }
    if (activeName === 'Taking out trash') {
      newActivities.push({
        activityName: 115,
        kind: 'c',
        duration: duration,
      });
    }

    // 116. Walking, pushing a wheelchair
    if (activeName === 'Walking, pushing a wheelchair') {
      newActivities.push({
        activityName: 116,
        kind: '',
        duration: duration,
      });
    }

    // 117. Teach physical education, exercise class
    if (activeName === 'Teach physical education,exercise class') {
      newActivities.push({
        activityName: 117,
        kind: '',
        duration: duration,
      });
    }

    // else
    // else {
    //   newActivities.push({
    //     activityName: 0,
    //     kind: '',
    //     duration: duration,
    //   });
    // }
  };
  return newActivities;
};

module.exports = {
  activRepair,
};
