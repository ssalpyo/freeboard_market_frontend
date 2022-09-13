import styled from '@emotion/styled'

const Test = styled.div`
	width: 300px;
	height: 300px;
	background-color: skyblue;
	animation: fadeIn 3s forwards;

@keyframes fadeIn {
  from {
    width: 300px;
  }
  to {
    width: 600px;
  }
}
`

export default function MyPageUI() {
  return (
		<div>
			<Test></Test>
		</div>
	)
}
