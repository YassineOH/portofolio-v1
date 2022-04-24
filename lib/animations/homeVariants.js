export const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

export const typedVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

export const buttonVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 4,
            duration: 1
        }
    }
}

export const subTitleVariants = {
    hidden: {
        opacity: 0,
        y: "10Vh"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 3.5,
            duration: 1
        }
    }
}