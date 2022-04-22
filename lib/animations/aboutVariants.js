export const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.5,
        }
    }
}

export const subContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: .3,
        }
    },
    hover: {
        scale: 1
    }
}



export const paraVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 100,
            stiffness: 200,
            mass: 10,
        }
    }
}

