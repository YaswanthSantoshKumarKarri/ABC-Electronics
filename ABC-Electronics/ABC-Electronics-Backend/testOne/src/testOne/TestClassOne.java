package testOne;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TestClassOne {

	public static void testMeth(){
         
        List ls = Arrays.asList(1, "hello", 2.6);
		
		for (Object obj : ls) {
			System.out.println(obj);
		}		
	}
}
