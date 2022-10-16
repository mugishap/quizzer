
export interface QuestionObject {
    questionText: string,
    name: string,
    index: number
    answers: AnswerObject[]
    validAnswer: string
    selectedAnswer: string
}

export interface AnswerObject {
    answerLetter: string,
    answer: string
}

export const questions: QuestionObject[] = [
    {
        name: "question1",
        index: 1,
        questionText: "What do you understand by programming? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "The process or activity of writing computer programs"
            },
            {
                answerLetter: 'B',
                answer: "The programs and other operating information used by a computer"
            }, {
                answerLetter: 'C',
                answer: "Creating tutorial books"
            },
            {
                answerLetter: 'D',
                answer: "Writing softwares"
            }, {
                answerLetter: 'E',
                answer: "Act of keeping code"
            }
        ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question2",
        index: 2,
        questionText: "Who discovered electricity? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "Benjamin Franklin"
            },
            {
                answerLetter: 'B',
                answer: "Thomas Edison"
            }, {
                answerLetter: 'C',
                answer: "Nikola Tesla"
            },
            {
                answerLetter: 'D',
                answer: "Albert Einstein"
            }, {
                answerLetter: 'E',
                answer: "Isaac Newton"
            }

        ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question3",
        index: 3,
        questionText: "Who discovered the law of gravitation? ",
        answers:
            [
                {
                    answerLetter: 'A',
                    answer: "Benjamin Franklin"
                },
                {
                    answerLetter: 'B',
                    answer: "Thomas Edison"
                }, {
                    answerLetter: 'C',
                    answer: "Nikola Tesla"
                },
                {
                    answerLetter: 'D',
                    answer: "Albert Einstein"
                }, {
                    answerLetter: 'E',
                    answer: "Isaac Newton"
                }
            ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question4",
        index: 4,
        questionText: "Choose the correct answer, which is the best definition of a computer? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "A machine that can be programmed to carry out sequences of arithmetic or logical operations automatically"
            },
            {
                answerLetter: 'B',
                answer: "A book that teaches you how to program"
            }, {
                answerLetter: 'C',
                answer: "A library of programs"
            },
            {
                answerLetter: 'D',
                answer: "A person who writes programs"
            }, {
                answerLetter: 'E',
                answer: "A person who keeps code"
            }
        ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question5",
        index: 5,
        questionText: "What is the name of the first computer? ",
        answers:
            [
                {
                    answerLetter: 'B',
                    answer: "UNIVAC"
                },
                {
                    answerLetter: 'A',
                    answer: "ENIAC"
                },
                {
                    answerLetter: 'C',
                    answer: "EDVAC"
                },
                {
                    answerLetter: 'D',
                    answer: "EDSAC"
                }, {
                    answerLetter: 'E',
                    answer: "UNIVAC"
                }],
        validAnswer: 'B',
        selectedAnswer: ''
    }, {
        name: "question6",
        index: 6,
        questionText: "What is the name of the first computer programmer? ",
        answers:
            [
                {
                    answerLetter: 'A',
                    answer: "Ada Lovelace"
                },
                {
                    answerLetter: 'B',
                    answer: "Grace Hopper"
                },
                {
                    answerLetter: 'C',
                    answer: "Alan Turing"
                },
                {
                    answerLetter: 'D',
                    answer: "Charles Babbage"
                }, {
                    answerLetter: 'E',
                    answer: "John von Neumann"
                }],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question7",
        index: 7,
        questionText: "What do you understand by programming? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "The process or activity of writing computer programs"
            },
            {
                answerLetter: 'B',
                answer: "The programs and other operating information used by a computer"
            }, {
                answerLetter: 'C',
                answer: "Creating tutorial books"
            },
            {
                answerLetter: 'D',
                answer: "Writing softwares"
            }, {
                answerLetter: 'E',
                answer: "Act of keeping code"
            }
        ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question8",
        index: 8,
        questionText: "What do you understand by programming? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "The process or activity of writing computer programs"
            },
            {
                answerLetter: 'B',
                answer: "The programs and other operating information used by a computer"
            }, {
                answerLetter: 'C',
                answer: "Creating tutorial books"
            },
            {
                answerLetter: 'D',
                answer: "Writing softwares"
            }, {
                answerLetter: 'E',
                answer: "Act of keeping code"
            }
        ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question9",
        index: 9,
        questionText: "Describe the difference between a computer and a computer system. ",
        answers:

            [
                {
                    answerLetter: 'A',
                    answer: "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. A computer system is a combination of hardware and software that provides the capabilities for users to perform specific tasks."
                },
                {
                    answerLetter: 'B',
                    answer: "A computer is a machine that can be programmed to carry out cooking operations. A computer system is a combination of hardware and software that provides the capabilities for users to perform specific tasks."
                }, {
                    answerLetter: 'C',
                    answer: "A computer is a machine that can be programmed to carry out masonry stuff. A computer system is a combination of hardware and software that provides the capabilities for users to perform specific tasks."
                },
                {
                    answerLetter: 'D',
                    answer: "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. A computer system is a combination of hardware and software that provides the capabilities for users to perform specific tasks."
                }, {
                    answerLetter: 'E',
                    answer: "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. A computer system is a combination of hardware and software that provides the capabilities for users to perform specific tasks."
                }
            ],
        validAnswer: 'A',
        selectedAnswer: ''
    }, {
        name: "question10",
        index: 10,
        questionText: "How many bits are in a byte? ",
        answers: [
            {
                answerLetter: 'A',
                answer: "8"
            },
            {
                answerLetter: 'B',
                answer: "16"
            },
            {
                answerLetter: 'C',
                answer: "32"
            },
            {
                answerLetter: 'D',
                answer: "64"
            },
            {
                answerLetter: 'E',
                answer: "128"
            }
        ],
        validAnswer: 'A',
        selectedAnswer: ''

    }
]
