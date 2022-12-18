export const DISCORD_EPOCH = 1420070400000n

/** Class representing a Discord snowflake ID */
export class Snowflake {
    /**
     * @param {bigint} snowflake - Discord snowflake ID
     */
    constructor(private readonly snowflake: bigint) {}

    /**
     * Timestamp in milliseconds
     */
    get timestamp(): number {
        return Number((BigInt(this.snowflake) >> BigInt(22)) + DISCORD_EPOCH)
    }

    /**
     * Internal worker ID
     */
    get workedId(): number {
        return Number((BigInt(this.snowflake) & BigInt(0x3E0000)) >> BigInt(17))
    }

    /**
     * Internal process ID
     */
    get processId(): number {
        return Number((BigInt(this.snowflake) & BigInt(0x1F000)) >> BigInt(12))
    }

    /**
     * Increment
     */
    get increment(): number {
        return Number(BigInt(this.snowflake) & BigInt(0xFFF))
    }

    /**
     * Date object from timestamp
     */
    get date(): Date {
        return new Date(this.timestamp)
    }
}
