use std::thread;

fn main(){
    for _ in 0..3{
        thread::spawn(||{
            loop{
                // Infinite loop
            }
        });
    }

    loop{
        // Infinite loop
    }
}

// here 3 threads are created and on main thread 4 threads are working here we can do vertical scalling