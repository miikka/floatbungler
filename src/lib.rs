use pyo3::prelude::*;

mod bits;
mod gorilla;


/// Compression algorithms for floating-point data
#[pymodule]
fn floatbungler(m: &Bound<'_, PyModule>) -> PyResult<()> {
    let gorilla = PyModule::new(m.py(), "gorilla")?;
    gorilla.add_function(wrap_pyfunction!(gorilla::encode, &gorilla)?)?;
    gorilla.add_function(wrap_pyfunction!(gorilla::decode, &gorilla)?)?;
    m.add_submodule(&gorilla)?;

    // Workaround to make `from floatbungler import gorilla` work
    // See https://github.com/PyO3/pyo3/issues/759 for background
    m.py().import("sys")?
        .getattr("modules")?
        .set_item("floatbungler.gorilla", gorilla)?;    

    println!("ok");

    Ok(())
}
