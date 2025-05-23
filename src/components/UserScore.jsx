import StyledChart from "@components/styled/Chart"

const UserScore = ({ vote_count, consensus, $chartSize = "2.375rem" }) => {
  let trackColor, barColor
  if (vote_count === 0 || !consensus) {
    trackColor = "#d4d4d4"
    barColor = "#d4d4d4"
  } else if (consensus >= 70) {
    trackColor = "#204529"
    barColor = "#21d07a"
  } else if (consensus >= 40) {
    trackColor = "#423d0f"
    barColor = "#d2d531"
  } else {
    trackColor = "#571435"
    barColor = "#db2360"
  }

  return (
    <StyledChart
      className="consensus hide-xs"
      $chartSize={$chartSize}
      $vote_count={vote_count}
      $consensus={consensus}
      $trackColor={trackColor}
      $barColor={barColor}
    >
      {vote_count > 0 ? (
        <>
          <span className="user-score">
            {consensus}
            <sup className="has-score fs-10">%</sup>
          </span>
        </>
      ) : (
        <span className="user-score">NR</span>
      )}
    </StyledChart>
  )
}

export default UserScore
