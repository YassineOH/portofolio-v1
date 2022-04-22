export const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0
    }
}


export const projectVariants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            duration: .5
        }
    }
}

export const openVariants = {
    hidden: {
        width: 0
    },

    visible: {
        width: "auto",
        transition: {
            duration: 1,
            when: "beforeChildren",
        }
    },

    exit: {
        width: 0,
        transition: {
            duration: 1
        }
    }
}


export const openVariantsPhone = {
    hidden: {
        height: 0
    },

    visible: {
        height: "auto",
        transition: {
            duration: 1,
            when: "beforeChildren",
        }
    },

    exit: {
        height: 0,
        transition: {
            duration: 1
        }
    }
}


export const elementVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}