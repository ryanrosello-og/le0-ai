export interface ConstantsType {
  [key: string]: any
}

export const Constants = {
  Timeout: {
    /**
     * 100ms
     */
    MICRO: 100,

    /**
     * 500ms
     */
    POLLING: 500,

    /**
     * 2000ms
     */
    TINY: 2000,

    /**
     * 5000ms
     */
    SHORTER: 5000,

    /**
     * 10000ms
     */
    SHORT: 10000,

    /**
     * 15000ms
     */
    MEDIUM: 15000,

    /**
     * 30000ms
     */
    LONG: 30000,

    /**
     * 60000ms
     */
    LONGER: 60000,

    /**
     * 90000ms
     */
    SLIGHTLY_LONGER: 90000, //1.5 minutes

    /**
     * 180000ms (3 mins)
     */
    VERY_LONG: 180000, // 3 minutes

    /**
     * 900000ms (15 mins)
     */
    TOO_LONG: 900000, //15 minutes
  },
}
