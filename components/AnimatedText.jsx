import Typewriter from "typewriter-effect";

const AnimatedText = ({ text, pauseBefore = 0, speed = 100 }) => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .pauseFor(pauseBefore)
            .changeDelay(speed)
            .typeString(text);
        }}
        options={{
          cursor: "",
          hideCursorAfterText: true,
        }}
      />
    </>
  );
};

export default AnimatedText;
