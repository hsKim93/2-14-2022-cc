public class solution {
    public static void main(String[] args) {
        System.out.println(actualMemorySize("32GB"));
        System.out.println(actualMemorySize("2GB"));
        System.out.println(actualMemorySize("512MB"));
    }

    public static String actualMemorySize(String memory) {
        String memoryString = memory.substring(0, memory.length()-2);
        double memoryDouble = Double.parseDouble(memoryString);
        memoryDouble = memoryDouble / 100 * 93;
        if (memory.endsWith("GB")) {
            return Math.round(memoryDouble * 100.0) / 100.0 + "GB";
        } else {
            return (int) Math.round(memoryDouble) + "MB";
        }
    }
}
