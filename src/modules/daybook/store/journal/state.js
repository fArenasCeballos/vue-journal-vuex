
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Deserunt adipisicing ad aute cillum elit pariatur quis magna amet qui cillum anim ad.',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Ullamco aliqua cupidatat ipsum laboris adipisicing occaecat excepteur esse ex.',
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Aliquip in excepteur incididunt eu eu eiusmod cupidatat est.',
            picture: null,
        },
    ]
})