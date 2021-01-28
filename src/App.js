import React, { useState } from 'react'

function App() {

    const
        scaleNames = {
            r: 'Radians',
            g: 'Grades'
        },

        toRadians = grades => grades * 0.01745,
        toGrades = radians => radians * 57.296,

        convert = (value, convert) => {
            const input = parseFloat(value)
            if (Number.isNaN(input)) return ''

            const output = convert(input)
            const rounded = Math.round(output * 1000) / 1000;
            return rounded.toString()
        },

        Title = ({ scale }) => <h1>{scale}</h1>,

        Input = ({ scale, temperature, onScaleChange, onTemperatureChange }) => {
            const
                handleChange = e => {
                    onTemperatureChange(e.target.value)
                    onScaleChange(scale)
                }

            return (
                <>
                    <legend>{scaleNames[scale]}:</legend>
                    <input
                        id={scaleNames[scale]}
                        value={temperature}
                        onChange={handleChange}
                    />
                </>
            )
        },

        Converter = () => {
            const
                [scale, setScale] = useState('r'),
                [temperature, setTemperature] = useState(''),
                radians = scale === 'g' ? convert(temperature, toRadians) : temperature,
                grades = scale === 'r' ? convert(temperature, toGrades) : temperature,
                currentScale = scale === 'r' ? 'Radians to degrees' : 'Degrees to radians'

            return (
                <>
                    <Title scale={currentScale} />
                    <Input
                        scale="r"
                        temperature={radians}
                        onScaleChange={setScale}
                        onTemperatureChange={setTemperature} />
                    <Input
                        scale="g"
                        temperature={grades}
                        onScaleChange={setScale}
                        onTemperatureChange={setTemperature} />
                </>
            )
        }

    return (
        <div className="App">
            <Converter />
        </div>
    )
}

export default App
