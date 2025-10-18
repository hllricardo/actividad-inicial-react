const products = [
    {
        id: 1,
        name: "¿Enserio...?",
        price: 10,
        imageUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWF2NWJrbDJ1Zmlxdnk4djk1eXJhOHE1M2M1bGkxdms2ODRodGEyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/91BCkba1STSmzb4UWK/giphy.gif",
        description: "Te permite cuestionar las decisiones de otro jugador anulando su movimiento y obligarlo a repetir su turno.",
        category: "Carta Mental"
    },
    {
        id: 2,
        name: "¡¡NO TE ESCUCHO!!",
        price: 10,
        imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9nZnpybDJ0amMwb2pnNW5vZDFiNWhid3FscDRmYWVjcmJ4Y3RvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fKwpeyXg2rBPa/giphy.gif",
        description: "Anula el movimiento de otro jugador hacia ti pero te salta un turno.",
        category: "Carta Comun"
    },
    {
        id: 3,
        name: "Generar caos",
        price: 10,
        imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGFvam5kNndkN200a25idWdidGd3aDZmaDBlYXZhaDdtYm1jd3JvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Pqupm8MUUq7C/giphy.gif",
        description: "Generar caos en el lugar donde estas ubicado para el resto de jugadores.",
        category: "Carta Caotica"
    },
     {
        id: 4,
        name: "Pues, bailo",
        price: 1,
        imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDh4MjhoczNwYXNxM2EzaDlrMmcxcXI5dTdydDc3d3g3aDZzNGZscCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zlVf2eSgXIFFuTnEhz/giphy.gif",
        description: "Cuando tienes muchos problemas y no sabes que hacer.",
        category: "Carta Comun"
    },
    {
        id: 5,
        name: "Por los pelos",
        price: 5,
        imageUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmMybzQ5amFrOTV4Z2M5cG52NHJ6M3NiNXBteG5wNTNicmRsczgxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G3Wfea8vbpQK4/giphy.gif",
        description: "Permite evitar las trampas pero las activas tras de ti.",
        category: "Carta Caotica"
    },
    {
        id: 6,
        name: "Al suelo y rodar",
        price: 20,
        imageUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2x4Y2xxMTU3Z2JpeG5sM3l6NHdsaDFwNGllcGNibWhrdWZmYmltZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cnbsOTkEJnq0/giphy.gif",
        description: "Te permite evitar cualquier ataque dirigido hacia ti durante un turno.",
        category: "Carta Conjuro"
    },
     {
        id: 7,
        name: "Hasta aqui llegaste",
        price: 5,
        imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXQxemh5YXN6NHdkdnppY243ZHVnanI4dTRlbDdoaWw5aWVyMjNkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EPcvhM28ER9XW/giphy.gif",
        description: "Te permite anular cualquier acción realizada por otro jugador en su turno.",
        category: "Carta Instantanea"
    },
    {
        id: 8,
        name: "Robo discreto",
        price: 1,
        imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaThqOGRtNm9ld2FoMXE4cDZoamEzdDUwZG15ZW16eXhieGYxaDFrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ofHpfBbgXhEVG/giphy.gif",
        description: "Te permite robar un artefacto o carta a otro jugador sin que se de cuenta.",
        category: "Carta Instantanea"
    },
    {
        id: 9,
        name: "Vamonos de aqui",
        price: 30,
        imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm5tamZud2xvZ3Exb3h6eGE4aWVhaW5zOGV3bXJhZnE5MzZiMnRkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5fDchhd2zCJnW/giphy.gif",
        description: "Escapa de la prision (seas inocente o culpable) o de la mazmorra sin consecuencias.",
        category: "Carta Conjuro"
    },
    {
        id: 10,
        name: "Esta vacio",
        price: 50,
        imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXJyOWRhYXB5a3RhNjVqYnlqNnF1eXVpeGVieWg4ODBucGd0bWQ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uXQbPS73Y3qU/giphy.gif",
        description: "Te permite vaciar el cofre sin que nadie se de cuenta.",
        category: "Carta Comun"
    },
]

export default products;