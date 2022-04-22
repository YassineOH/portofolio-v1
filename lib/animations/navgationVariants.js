const transition = {
    type: "spring",
    stiffness: 100,
    when: "beforeChildren",
    staggerChildren: .2
}


export const navVariantsMobile = {
    hidden: {
        opacity: 0,
        x: "100vw",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        backdropFilter: "blur(0px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(5px)",
        transition
    },
}


export const navVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition
    }
}



export const itemVariantsMobile = {
    // hidden: {
    //     opacity: 0,
    // },
    // visible: {
    //     opacity: 1,
    //     transition: {
    //         damping: 190,
    //         mass: 1
    //     }
    // },

}

export const itemVariants = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,
        scale: [1.4, 1]
    }

}

