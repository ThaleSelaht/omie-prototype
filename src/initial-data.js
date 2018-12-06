const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Donatello', price: 0, segment: 'Consultoria'},
        'task-2': { id: 'task-2', content: 'Caravaggio', price: 0, segment: 'Comércio '},
        'task-3': { id: 'task-3', content: 'Michelangelo', price: 0, segment: 'Consultoria'},
        'task-4': { id: 'task-4', content: 'Rafael', price: 0, segment: 'Comércio '},
        'task-5': { id: 'task-5', content: 'Sandro Botticelli', price: 0, segment: 'Restaurante'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Mailing',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'], 
        },
        'column-2': {
            id: 'column-2',
            title: 'Qualificação/agendamento',
            taskIds: [], 
        },
        'column-3': {
            id: 'column-3',
            title: 'Apresentação da parceria',
            taskIds: [], 
        },
        'column-4': {
            id: 'column-4',
            title: 'Fechamento Parceira',
            taskIds: [], 
        },
        'column-5': {
            id: 'column-5',
            title: 'Recebimento de planilha com carteira de clientes',
            taskIds: [], 
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
}

export default initialData;