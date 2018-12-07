const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Pablo Picasso', price: 0, segment: 'Consultoria'},
        'task-2': { id: 'task-2', content: 'Georges Braque', price: 229 , segment: 'Comércio'},
        'task-3': { id: 'task-3', content: 'Salvador Dalí', price: 0, segment: 'Consultoria'},
        'task-4': { id: 'task-4', content: 'Paul Cézanne', price: 0, segment: 'Comércio'},
        'task-5': { id: 'task-5', content: 'Juan Gris', price: 229, segment: 'Restaurante'},
        'task-6': { id: 'task-6', content: 'Marcel Duchamp', price: 0, segment: 'Consultoria'},
        'task-7': { id: 'task-7', content: 'Pieter Cornelis Mondrian', price: 0, segment: 'Consultoria'},
        'task-8': { id: 'task-8', content: 'Carmen Frida Kahlo', price: 350, segment: 'Restaurante'},
        'task-9': { id: 'task-9', content: 'Fernand Léger', price: 350, segment: 'Consultoria'},
        'task-10': { id: 'task-10', content: 'Paul Klee', price: 350, segment: 'Comércio'},
        'task-11': { id: 'task-11', content: 'Marc Chagall', price: 0, segment: 'Comércio'},
        'task-12': { id: 'task-12', content: 'Kazimir Malevich', price: 0, segment: 'Comércio'},
        'task-13': { id: 'task-13', content: 'Diego Rivera', price: 350, segment: 'Comércio'},
        'task-14': { id: 'task-14', content: 'Romero Britto', price: 229, segment: 'Comércio'},
        'task-15': { id: 'task-15', content: 'Robert Delaunay', price: 0, segment: 'Comércio'},
        'task-16': { id: 'task-16', content: 'David Hockney', price: 0, segment: 'Comércio'},
        'task-17': { id: 'task-17', content: 'Jean Metzinger', price: 350, segment: 'Comércio'},
        'task-18': { id: 'task-18', content: 'Jean Metzinger', price: 0, segment: 'Comércio'},
        'task-19': { id: 'task-19', content: 'Franz Marc', price: 350, segment: 'Comércio'},
        'task-20': { id: 'task-20', content: 'Francis Picabia', price: 229, segment: 'Comércio'},

    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Captura Lead',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-11', 'task-12', 'task-14', 'task-15', 'task-16', 'task-17'], 
        },
        'column-2': {
            id: 'column-2',
            title: 'Qualificação/Agendamento',
            taskIds: ['task-6', 'task-7', 'task-8', 'task-13','task-18', 'task-19'], 
        },
        'column-3': {
            id: 'column-3',
            title: 'Diagnóstico',
            taskIds: ['task-9', 'task-10', 'task-20'], 
        },
        'column-4': {
            id: 'column-4',
            title: 'Demonstração do Sistema',
            taskIds: [], 
        },
        'column-5': {
            id: 'column-5',
            title: 'Fechamento',
            taskIds: [], 
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
}

export default initialData;