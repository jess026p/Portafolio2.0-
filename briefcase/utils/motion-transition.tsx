export const transitionVariantsPage = {
    initial: {
        x: "100%",
        y: "100%" // Cambio "with" por "y"
    },
    animate: {
        x: '0%',
        y: '0%' // Cambio "with" por "y"
    },
    exit: {
        x: ['0%', '100%'],
        y: ['0%', '100%'], // Cambio "with" por "y"
    }
}

export const fadeIn = (position: string) => {
    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },
        hidden: {
            y: position === 'bottom' ? -80 : 0, // Cambio "botom" por "bottom"
            x: position === 'right' ? 80 : 0,
            opacity: 1, // No cambió aquí, pero verifica si debería ser 0
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
