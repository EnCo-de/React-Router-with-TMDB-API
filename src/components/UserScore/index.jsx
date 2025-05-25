import UserScoreChart from "./styles"
import { chooseColors } from "@/utils/colors"

const UserScore = ({ vote_count, consensus, $chartSize }) => {
  const {trackColor, barColor} = chooseColors(vote_count, consensus)

  return (
    <UserScoreChart
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
    </UserScoreChart>
  )
}

export default UserScore
