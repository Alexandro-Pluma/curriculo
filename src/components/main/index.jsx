import Skill from "../footer";
import Paragraph from "../paragraph/paragraph";
import SubTitle from "../sub-title";
import Title from "../title";
function icon() {
    const skill = document.getElementById("#ico")
    skill.addEventListener("click", () => {
        skill.classList.toggle("active")
    })
} 

function Main() {

    return (
        <div className="main">
            <div className="about">
                <Title title= "About me" />
                <Paragraph 
                    paragraph= "Donec a augue gravida, vulputate ligula et, pellentesque arcu. 🤖Morbi feugiat eros nec sem ultrices, et venenatis velit posuere. Donec bibendum commodo dui, eget sollicitudin urna sagittis non. Donec ac commodo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                />

                <>
                    <Title title="Education"/>
                    <div className="education">
                        <div className="container">
                            <SubTitle subTitle="Ryerson University"  />
                            <Paragraph
                                paragraph="Parallel to the Postgraduate degree in computer security..."
                                
                            />
                        </div>
                        <div>
                            <SubTitle subTitle="LA University"  />
                            <Paragraph paragraph="Parallel to the Potsgraduate degree in computer security..." />
                        </div>
                    </div>
                </>
                <>
                    <Title title="Experience"/>
                    <div className="education">
                        <div>
                            <SubTitle subTitle="Civie - UXUI Designer"  />
                            <Paragraph
                                paragraph="Parallel to the Potsgraduate degree in computer security..."
                             />
                        </div>
                        <div>
                            <SubTitle subTitle="Despegar - FrontEnd Dev"  />
                            <Paragraph
                                paragraph="Parallel to the Potsgraduate degree in computer security..."
                             />
                        </div>
                    </div>
                </>

                <div className="skill">
                    <Title title="Skills"/>
                    <div className="footer">
                        <Paragraph
                            paragraph="React"
                        />
                        <Skill/>
                    </div>
                    <div className="footer">
                        <Paragraph
                            paragraph="javaScript"
                        />
                        <Skill/>
                    </div>
                    <div className="footer">
                        <Paragraph
                            paragraph="typeScript"
                        />
                        <Skill/>

                    </div>
                    <div className="footer">
                        <Paragraph
                            paragraph="node.js"
                        />
                        <Skill/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main