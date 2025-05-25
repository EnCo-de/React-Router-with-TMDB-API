export const chooseColors = (vote_count, consensus) => {
  switch (true) {
    case vote_count === 0 || !consensus:
      return {
        trackColor: "#d4d4d4",
        barColor: "#d4d4d4",
      }

    case consensus >= 70:
      return {
        trackColor: "#204529",
        barColor: "#21d07a",
      }

    case consensus >= 40:
      return {
        trackColor: "#423d0f",
        barColor: "#d2d531",
      }

    default:
      return {
        trackColor: "#571435",
        barColor: "#db2360",
      }
  }
}
