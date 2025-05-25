export const createNavContent = ({
  previousLabel = "Previous",
  nextLabel = "Next",
  breakLabel = "...",
  marginPagesDisplayed = 1, // Number of pages to show at the beginning and end
  pageRangeDisplayed = 3, // Number of pages to show around the current page
  toNext, // handle click
  current = 1,
  total = 1,
}) => {
  const content = [
    {
      label: previousLabel,
      handleClick: toNext,
      args: [-1],
      disabled: current <= 1,
    },
  ]
  const dots = {
    label: breakLabel,
    dots: true,
  }
  const last = {
    label: nextLabel,
    handleClick: toNext,
    args: [],
    disabled: current >= total,
  }

  if (current > 4) {
    content.push({
      label: 1,
      handleClick: toNext,
      args: [1],
    })
    content.push(dots)
  }

  const startN = Math.max(
    1,
    Math.min(current - 2, current - 4 + (total - current))
  )
  const central = Math.min(total, pageRangeDisplayed)

  for (let index = startN; index < startN + central; index++) {
    if (index === current) {
      content.push({
        label: index,
        active: true,
      })
    } else {
      content.push({
        label: index,
        handleClick: toNext,
        args: [index],
      })
    }
  }

  if (total - current > 3) {
    content.push(dots)
    content.push({
      label: total,
      handleClick: toNext,
      args: [total],
    })
  }
  content.push(last)

  return content
}