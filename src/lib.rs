use pyo3::prelude::*;

mod bits;
mod bit_utils;
mod gorilla;
mod chimp;
mod chimp128;

// TODO(miikka) Convert the module declaration to use declarative modules
// https://pyo3.rs/v0.26.0/module.html?highlight=declarative#declarative-modules

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

    let chimp = PyModule::new(m.py(), "chimp")?;
    chimp.add_function(wrap_pyfunction!(chimp::encode, &chimp)?)?;
    chimp.add_function(wrap_pyfunction!(chimp::decode, &chimp)?)?;
    m.add_submodule(&chimp)?;

    // Workaround to make `from floatbungler import chimp` work
    m.py().import("sys")?
        .getattr("modules")?
        .set_item("floatbungler.chimp", chimp)?;

    let chimp128 = PyModule::new(m.py(), "chimp128")?;
    chimp128.add_function(wrap_pyfunction!(chimp128::encode, &chimp128)?)?;
    chimp128.add_function(wrap_pyfunction!(chimp128::decode, &chimp128)?)?;
    m.add_submodule(&chimp128)?;

    // Workaround to make `from floatbungler import chimp128` work
    m.py().import("sys")?
        .getattr("modules")?
        .set_item("floatbungler.chimp128", chimp128)?;

    Ok(())
}
