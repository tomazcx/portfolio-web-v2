import Wavify from "react-wavify"

export const Wave = () => {

    return (
        <Wavify
        fill='#315EFF'
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.30,
          points: 3
        }}
        />
    )

}